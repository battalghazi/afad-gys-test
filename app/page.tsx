'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Trophy, Users, CheckCircle, GraduationCap, Target, Award, Menu, X, Home, Clock, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const topics = [
    { id: 'anayasa', title: 'Türkiye Cumhuriyeti Anayasası' },
    { id: 'ataturk', title: 'Atatürk İlkeleri ve İnkılap Tarihi' },
    { id: 'turkce', title: 'Türkçe ve Dil Bilgisi' },
    { id: '5902', title: '5902 Sayılı Kanun' },
    { id: '7269', title: '7269 Sayılı Kanun' },
    { id: '4123', title: '4123 Sayılı Kanun' },
    { id: '7126', title: '7126 Sayılı Sivil Savunma Kanunu' },
    { id: '4', title: '4 Sayılı Cumhurbaşkanlığı Kararnamesi' },
    { id: 'afet-yonetim-merkezleri', title: 'Afet ve Acil Durum Yönetim Merkezleri Yönetmeliği' },
    { id: 'afet-mudahale-hizmetleri', title: 'Afet ve Acil Durum Müdahale Hizmetleri Yönetmeliği' },
    { id: 'afet-harcamalari', title: 'Afet ve Acil Durum Harcamaları Yönetmeliği' },
    { id: 'afetlerin-genel-hayata-etkililigi', title: 'Afetlerin Genel Hayata Etkililiğine İlişkin Yönetmelik' },
    { id: 'buyuksehir-belediyeleri-harcamalar', title: 'Büyükşehir Belediyeleri Harcama Yönetmeliği' },
    { id: 'binalarin-yangindan-korunmasi', title: 'Binaların Yangından Korunması Hakkında Yönetmelik' },
    { id: 'afad-personeli-gorevde-yukselme', title: 'AFAD Personeli Görevde Yükselme Yönetmeliği' },
    { id: '657', title: '657 Sayılı Devlet Memurları Kanunu' },
    { id: '4982', title: '4982 Sayılı Bilgi Edinme Hakkı Kanunu' },
    { id: '3071', title: '3071 Sayılı Dilekçe Hakkının Kullanılmasına Dair Kanun' },
    { id: '5018', title: '5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu' },
    { id: '6245', title: '6245 Sayılı Harcırah Kanunu' },
    { id: '3628', title: '3628 Sayılı Mal Bildiriminde Bulunulması Kanunu' },
    { id: '4483', title: '4483 Sayılı Memurların Yargılanması Hakkında Kanun' },
    { id: '2577', title: '2577 Sayılı İdari Yargılama Usulü Kanunu' },
    { id: '6331', title: '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu' },
    { id: '5442', title: '5442 Sayılı İl İdaresi Kanunu' },
    { id: 'devlet-memurlari-disiplin', title: 'Devlet Memurları Disiplin Yönetmeliği' },
    { id: 'resmi-yazismalar', title: 'Resmî Yazışmalarda Uygulanacak Usul ve Esaslar' },
    { id: 'devlet-memurlari-sikayet', title: 'Devlet Memurlarının Şikayet ve Müracaatları Yönetmeliği' },
    { id: 'kamu-gorevlileri-etik', title: 'Kamu Görevlileri Etik Davranış İlkeleri Yönetmeliği' },
    { id: 'devlet-memurlari-hastalik-raporlari', title: 'Devlet Memurları Hastalık Raporları Yönetmeliği' },
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">AFAD Portal</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            <a href="#ana-sayfa" className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
              <Home className="mr-3 h-5 w-5" />
              Ana Sayfa
            </a>
            <a href="#konular" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">
              <BookOpen className="mr-3 h-5 w-5" />
              Sınav Konuları
            </a>
            <a href="#istatistikler" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="mr-3 h-5 w-5" />
              İstatistikler
            </a>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="text-center">
              <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 mb-1">Günlük Hedef</p>
              <p className="text-xs text-gray-600">5 test çözün!</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">AFAD Portal</span>
            </div>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden lg:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">AFAD Görevde Yükselme Sınav Portalı</h1>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>10K+ Kullanıcı</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>7/24 Erişim</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          {/* Hero Section */}
          <section id="ana-sayfa" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                  AFAD Sınavına Hazırlanın
                </h1>
                <p className="text-lg text-gray-600 md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                  Güncel mevzuat ve konularla hazırlanan sorular ile kendinizi test edin. 
                  Başarıya giden yolda yanınızdayız.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
                  <div className="text-center p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-xs text-gray-600">Soru</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">30+</div>
                    <div className="text-xs text-gray-600">Konu</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-xs text-gray-600">Başarı</div>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <Link href="#konular">
                    Konuları Keşfet <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Topics Section */}
          <section id="konular" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                  Sınav Konuları
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Aşağıdaki konulardan birini seçerek hemen teste başlayın. Her konu için 20 soruluk test hazır.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {topics.map((topic, index) => (
                  <Link href={`/quiz/${topic.id}`} key={topic.id} passHref legacyBehavior>
                    <a className="block h-full group">
                      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 bg-white group-hover:border-blue-300 relative overflow-hidden">
                        <CardHeader className="p-4 text-center">
                          <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg mb-3 mx-auto w-fit group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                          </div>
                          <CardTitle className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight line-clamp-2">
                            {topic.title}
                          </CardTitle>
                          <div className="flex items-center justify-center text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mt-2">
                            <Target className="h-3 w-3 mr-1" />
                            <span>20 Soru</span>
                          </div>
                        </CardHeader>
                      </Card>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section id="istatistikler" className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Platform İstatistikleri
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Binlerce öğrenci başarıya ulaşmak için platformumuzu kullanıyor.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-green-100 rounded-lg mx-auto w-fit mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Güncel Soru</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-blue-100 rounded-lg mx-auto w-fit mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Aktif Kullanıcı</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-purple-100 rounded-lg mx-auto w-fit mb-3">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Başarı Oranı</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-orange-100 rounded-lg mx-auto w-fit mb-3">
                    <Trophy className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Çözülen Test</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-4">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-1">
              &copy; {new Date().getFullYear()} AFAD Sınav Portalı. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-gray-400">
              Başarıya giden yolda yanınızdayız
            </p>
          </div>
        </footer>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}