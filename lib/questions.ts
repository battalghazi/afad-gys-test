/**
 * Soru Veritabanı ve Tipleri
 * 
 * AFAD GYS (Görevde Yükselme Sınavı) hazırlık uygulaması için
 * soru tiplerini ve soru veritabanını içerir.
 * 
 * Bu dosya:
 * - Soru tiplerini tanımlar (TypeScript interface)
 * - Tüm kategoriler için soruları barındırır
 * - Konulara göre organize edilmiş soru koleksiyonları sağlar
 */

/**
 * Soru Tipi (Interface)
 * 
 * Her sorunun sahip olması gereken özellikler:
 * 
 * @property question - Soru metni (zorunlu)
 * @property options - Çoktan seçmeli şıklar dizisi (zorunlu, minimum 2 şık)
 * @property answer - Doğru cevap (options dizisindeki değerlerden biri olmalı)
 * @property explanation - Cevabın açıklaması (opsiyonel, eğitim amaçlı)
 */
export type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};