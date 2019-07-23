import { storiesOf } from '@storybook/vue'


storiesOf('CSS/Contents', module)

.add('Single has foto cerita', () => ({
  template: `
<div class="w-full">
    <main class="w-full">
        <article class="w-full">
          <div class="flex flex-col w-full">
            <div class="content has-foto-cerita">
              <p>Inggris memiliki jasa besar dalam melahirkan musisi-musisi legendaris yang turut membentuk wajah industri musik dunia hingga seperti yang ada saat ini. Sebut saja grup seperti Beatles dan Queen yang beberapa karyanya telah terukir dalam sanubari para penggemar musik dan akan terus dikenang sepanjang masa.</p>
              <figure class="article-figure wp-caption alignnone" id="attachment_10129438" aria-describedby="figcaption_attachment_10129438" itemscope="itemscope" itemtype="http://schema.org/ImageObject">
                  <div><img class="size-medium wp-image-10129438" src="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2019/02/20190216H24_DISPLAY-FOTO3_OK_web_1550229719-720x405.jpg" alt="" width="720" height="405" srcset="https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2019/02/20190216H24_DISPLAY-FOTO3_OK_web_1550229719-720x405.jpg 720w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2019/02/20190216H24_DISPLAY-FOTO3_OK_web_1550229719-768x432.jpg 768w, https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2019/02/20190216H24_DISPLAY-FOTO3_OK_web_1550229719.jpg 1024w"
                          sizes="(max-width: 720px) 100vw, 720px" /></div>
                  <figcaption class="article-figcaption wp-caption-text" id="figcaption_attachment_10129438" itemprop="description">
                    <span class="article-figcaption-credit">KOMPAS/FERGANATA INDRA RIATMOKO</span>
                    <p class="caption font-12">Senja di Kota Liverpool</p>
                  </figcaption>
              </figure>
            </div>
          </div>    
        </article>
    </main>
</div>
  `
}),{
  notes: 'Menggunakan class content dan has-foto-cerita untuk menampilkan konten foto dengan menampilkan text judul dan pemiliki foto.'
})