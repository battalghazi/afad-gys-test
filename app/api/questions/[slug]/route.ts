import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { Question } from '@/lib/questions';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  if (!slug) {
    return new NextResponse(
      JSON.stringify({ message: 'Slug parameter is missing.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const jsonDirectory = path.join(process.cwd(), 'data', 'questions');
  const filePath = path.join(jsonDirectory, `${slug}.json`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const questions: Question[] = JSON.parse(fileContents);
    
    // Rastgele soru seçimi için Fisher-Yates shuffle algoritması
    const shuffleArray = (array: Question[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Soruları karıştır ve ilk 20'sini al
    const shuffledQuestions = shuffleArray(questions);
    const quizQuestions = shuffledQuestions.slice(0, Math.min(20, shuffledQuestions.length));

    return NextResponse.json(quizQuestions);
  } catch (error) {
    console.error(`Error reading or parsing file for slug '${slug}':`, error);
    return new NextResponse(
      JSON.stringify({ message: `Sorular bulunamadı: '${slug}'.` }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
