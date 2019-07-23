import { storiesOf } from '@storybook/vue'


storiesOf('CSS/Contents', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full sm:w-2/5 max-w-xl mx-auto"><children/></div>'
  }
})
.add('Single', () => ({
  template: `
  <div class="content">
      <figure class="wp-caption alignnone" id="attachment_9943860" aria-describedby="figcaption_attachment_9943860" itemscope="itemscope" itemtype="http://schema.org/ImageObject">
          <div><img class="size-medium wp-image-9943860" src="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/kompas_tark_21161740_4_1-1-720x405.jpeg" alt="" width="720" height="405" srcset="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/kompas_tark_21161740_4_1-1-720x405.jpeg 720w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/kompas_tark_21161740_4_1-1-768x432.jpeg 768w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/kompas_tark_21161740_4_1-1-1024x576.jpeg 1024w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/kompas_tark_21161740_4_1-1.jpeg 1079w"
                  sizes="(max-width: 720px) 100vw, 720px" /></div>
          <figcaption class="wp-caption-text" id="figcaption_attachment_9943860" itemprop="description"><span class="article-figcaption-credit">Kompas/FX Laksana Agung Saputra </span>
              <p class="caption font-12 leading-normal">Iroh (25) melepas anaknya, Erni (6), berangkat sekolah dari rumah gubuknya di Desa Banyuasih, Cigeulis, Pandeglang, Banten, Jumat (15/1/2016). Untuk memutus rantai kemiskinan dan mencapai target Tujuan Pembangunan Berkelanjutan (SDGs) dibutuhkan
                  inovasi daerah dan keterlibatan semua pihak.</p>
          </figcaption>
      </figure>
      <p>JAKARTA, KOMPAS—Berbagai <a href="#">persoalan pembangunan masyarakat ada di daerah</a>. Masyarakat dan pemerintah daerah pula yang memahami solusi terbaik atas persoalan mereka. Karena itu, inovasi daerah penting demi tercapainya target Tujuan Pembangunan
          Berkelanjutan (SDGs).</p>
      <figure class="wp-caption alignnone" id="attachment_9954224" aria-describedby="figcaption_attachment_9943860" itemscope="itemscope" itemtype="http://schema.org/ImageObject">
          <div><img class="size-medium wp-image-9954224" src="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/181220-id.N219-amfibi_1545325703-720x402.jpg" alt="" width="720" height="402" srcset="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/181220-id.N219-amfibi_1545325703-720x402.jpg 720w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/181220-id.N219-amfibi_1545325703-768x429.jpg 768w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/181220-id.N219-amfibi_1545325703.jpg 1024w"
                  sizes="(max-width: 720px) 100vw, 720px" /></div>
          <figcaption class="wp-caption-text" id="figcaption_attachment_9954224" itemprop="description"><span class="article-figcaption-credit">lembaga penerbangan dan antariksa nasional</span>
              <p class="caption font-12">Konsep pesawat N219 Amfibi</p>
          </figcaption>
      </figure>
      <p>“Inovasi itu penting untuk meningkatkan layanan publik, memberdayakan masyarakat dan meningkatkan daya saing daerah,” kata Menteri Dalam Negeri Tjahjo Kumolo dalam Konferensi Tahunan SDGs 2018, di Jakarta, Selasa (18/12/2018).</p>
      <blockquote>
          <p>Pemda tidak boleh sok pintar, merasa mampu menyelesaikan semua masalah di daerahnya sendirian.</p>
      </blockquote>
      <p>Berbagai inovasi dalam pelaksanaan SDGs itu dikumpulkan Kementerian Perencanaan Pembangunan Nasional/Bappenas. Harapannya, praktik cerdas itu bisa menginspirasi dan diterapkan di daerah lain. Dengan demikian, SDGs bisa dibumikan sesuai konteks lokal
          dan targetnya pada 2030 bisa tercapai.</p>
      <p><strong>Pembiayaan</strong></p>
      <p>Selain membumikan agenda SDGs sesuai kondisi lokal, tantangan lain pelaksanaan SDGs adalah pembiayaan program. Jika mengandalkan pada anggaran pemerintah, SDGs dipastikan sulit berjalan karena dana pemerintah terbatas.</p>
      <p><img class="alignnone size-medium wp-image-9949417" src="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/WhatsApp-Image-2018-12-20-at-8.17.13-AM_1545271467-720x413.jpeg" alt="" width="720" height="413" srcset="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/WhatsApp-Image-2018-12-20-at-8.17.13-AM_1545271467-720x413.jpeg 720w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/WhatsApp-Image-2018-12-20-at-8.17.13-AM_1545271467-768x440.jpeg 768w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/12/WhatsApp-Image-2018-12-20-at-8.17.13-AM_1545271467.jpeg 1024w"
              sizes="(max-width: 720px) 100vw, 720px" /></p>
      <p>Seperti perkembangan konektivitas sebelumnya, yang ditawarkan dari perkembangan 4G ke 5G yaitu kecepatan yang lebih kencang, kapasitas yang lebih besar, dan latensi yang lebih rendah. Kemapuan transfer 5G sebesar satu hingga 10 gigabite per detik.</p>
      <p><iframe width="1000" height="563" src="https://www.youtube.com/embed/FhjUmcziu1c?feature=oembed&amp;modestbranding=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></p>
      <p>Penambahan kapasitas pada 5G juga membuat kecepatan jaringan ini tetap terjaga walau diakses di tempat yang ramai. Kemampuan ini disempurnakan dengan latensi yang semakin rendah, 1 milidetik. Sedangkan 4G masih memiliki tingkat latensi 10 milidetik.</p>
  </div>
  `
}))