export default function Project() {
    return(
    <main className="bg-custom-black-background h-screen">
        <section>
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">0</li>
                        <li class="glide__slide">1</li>
                        <li class="glide__slide">2</li>
                    </ul>
                </div>  

                <div data-glide-el="controls">
                    <button data-glide-dir="<">Prev</button>
                    <button data-glide-dir=">">Next</button>
                </div>
            </div>
        </section>
    </main>
    )
}