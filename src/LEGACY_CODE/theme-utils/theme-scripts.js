import '/src/LEGACY_CODE/styles/music_player.css'

export function showThemesCard(){
    let body = document.querySelector('body')
    const themes_card = document.createElement('div')
    themes_card.className = 'themes_card w-[auto] h-[380px] '
    const top_panel = document.createElement('div')
    top_panel.className = 'theme-top-panel flex flex-row justify-end items-center w-full h-[60px] opacity-80'
    const exit_button = document.createElement('button')
    exit_button.className = 'exit_btn rounded-[5px] h-[30px] w-[40px] flex items-center justify-center'
    exit_button.textContent = 'Back'
    top_panel.appendChild(exit_button)
    themes_card.appendChild(top_panel)
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper rounded-bl-[20px] rounded-br-[20px]  w-full h-full flex flex-row justify-start items-center'

    const thematic_card_1 = document.createElement('div')
    thematic_card_1.className = 'thematic_card w-[50px] h-[450px] bg-white rounded-lg' +
        ' ml-6'
    thematic_card_1.id = 'thematic-card-1'


    const thematic_card_2 = thematic_card_1.cloneNode(true)
    thematic_card_2.id = 'thematic-card-2'
    const thematic_card_3 = thematic_card_1.cloneNode(true)
    thematic_card_3.id = 'thematic-card-3'
    const thematic_card_4 = thematic_card_1.cloneNode(true)
    thematic_card_4.id = 'thematic-card-4'
    const thematic_card_5 = thematic_card_1.cloneNode(true)
    thematic_card_5.id = 'thematic-card-5'
    wrapper.append(thematic_card_1, thematic_card_2, thematic_card_3
    , thematic_card_4, thematic_card_5)

    themes_card.appendChild(wrapper)
    const overlay = document.createElement('div')
    overlay.className = 'overlay-layer'
    overlay.appendChild(themes_card)
    body.appendChild(overlay)


    exit_button.addEventListener('click', function exit() {
        overlay.remove()
        themes_card.remove()
    })
    const audio_1 = new Audio("https://pub-62223adbf3d544899589d9e959908c52.r2.dev/Kill_La_Kill_OST.mp3");
    const audio_2 = new Audio("https://pub-62223adbf3d544899589d9e959908c52.r2.dev/attack_on_titan_ost.mp3")
    const audio_3 = new Audio("https://pub-62223adbf3d544899589d9e959908c52.r2.dev/eva_ost.mp3")
    const audio_4 = new Audio("https://pub-62223adbf3d544899589d9e959908c52.r2.dev/rascal_bunny.mp3")
    const audio_5 = new Audio("https://pub-62223adbf3d544899589d9e959908c52.r2.dev/nano-ripe-tv-size.mp3")
    const thematic_overlay = document.createElement('div')
    thematic_overlay.className = 'thematic-overlay h-full bg-black opacity-50 flex flex-col justify-center items-center font-bold'
    thematic_overlay.textContent = 'Click to stop playing'
    let audio_trigger = false;

    thematic_card_1.addEventListener("mouseenter", () => {
        if (!audio_trigger) {
            audio_1.volume = 0.4;
            audio_1.play()
                .then(() =>{
                    console.log("Audio playing")
                })
                .catch(e => {
                    console.log(e)
                });
            thematic_card_1.appendChild(thematic_overlay)
            audio_trigger = true;
        }
    })
    thematic_card_1.addEventListener("click", () => {
        audio_1.pause()
        audio_1.currentTime = 0;
        thematic_overlay.remove()
        audio_trigger = false;
    })

    thematic_card_2.addEventListener("mouseenter", () => {
        if (!audio_trigger) {
            audio_2.volume = 0.4;
            audio_2.play()
                .then(() =>{
                    console.log("Audio playing")
                })
                .catch(e => {
                    console.log(e)
                });
            thematic_card_2.appendChild(thematic_overlay)
            audio_trigger = true;
        }
    })
    thematic_card_2.addEventListener("click", () => {
        audio_2.pause()
        audio_2.currentTime = 0;
        thematic_overlay.remove()
        audio_trigger = false;
    })

    thematic_card_3.addEventListener("mouseenter", () => {
        if (!audio_trigger) {
            audio_3.volume = 0.4;
            audio_3.play()
                .then(() =>{
                    console.log("Audio playing")
                })
                .catch(e => {
                    console.log(e)
                });
            thematic_card_3.appendChild(thematic_overlay)
            audio_trigger = true;
        }
    })
    thematic_card_3.addEventListener("click", () => {
        audio_3.pause()
        audio_3.currentTime = 0;
        thematic_overlay.remove()
        audio_trigger = false;
    })

    thematic_card_4.addEventListener("mouseenter", () => {
        if (!audio_trigger) {
            audio_4.volume = 0.4;
            audio_4.play()
                .then(() =>{
                    console.log("Audio playing")
                })
                .catch(e => {
                    console.log(e)
                });
            thematic_card_4.appendChild(thematic_overlay)
            audio_trigger = true;
        }
    })
    thematic_card_4.addEventListener("click", () => {
        audio_4.pause()
        audio_4.currentTime = 0;
        thematic_overlay.remove()
        audio_trigger = false;
    })

    thematic_card_5.addEventListener("mouseenter", () => {
        if (!audio_trigger) {
            audio_5.volume = 0.4;
            audio_5.play()
                .then(() =>{
                    console.log("Audio playing")
                })
                .catch(e => {
                    console.log(e)
                });
            thematic_card_5.appendChild(thematic_overlay)
            audio_trigger = true;
        }
    })
    thematic_card_5.addEventListener("click", () => {
        audio_5.pause()
        audio_5.currentTime = 0;
        thematic_overlay.remove()
        audio_trigger = false;
    })

}



export function innitThemeToggle(){
    const btn = document.querySelector('#theme-btn')
    btn.addEventListener('click', () => {
        showThemesCard()
    })

}

