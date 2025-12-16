import React from 'react'

function page() {
  return (
    <section className=' w-full h-auto p-12 bg-gray-100 pt-24'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-4xl font-extrabold pt-10 capitalize'>Portofolio</h2>
            <p className='text-center pt-10'>kami mendokumentasikan semua karya-karya kami dari semua klien di instagram</p>
        </div>
        <div className='max-w-6xl mx-auto border-t mt-16 pt-10 bg-transparent'>
            <div className="sk-instagram-feed w-full bg-transparent" data-embed-id="25632541"></div><script src="https://widgets.sociablekit.com/instagram-feed/widget.js" defer></script>
        </div>
    </section>

  )
}

export default page