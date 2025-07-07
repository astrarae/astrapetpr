export function create_card_login(){
    const body = document.querySelector('body')
    const user_input = document.createElement('input')
    user_input.type = 'text'
    user_input.id = 'user_login'
    user_input.className = 'border border-gray-300 text-gray-700 mt-12'
    user_input.placeholder = 'Enter your email address'
    user_input.required = true
    const user_password = document.createElement('input')
    user_password.type = 'password'
    user_password.id = 'user_pass'
    user_password.className = 'border border-gray-300 text-gray-700 mt-12'
    user_password.placeholder = 'Enter your password'
    user_password.required = true
    const user_confirmation_btn = document.createElement('button')
    user_confirmation_btn.id = 'btn_confirm'
    user_confirmation_btn.textContent = "Next"
    user_confirmation_btn.className = 'mt-12 submit_btn h-[35px] w-[50px] border border-gray-300 text-gray-700 color-black font-bold'

    const login_card = document.createElement('div')
    login_card.className = 'card bg-white w-[auto] h-[380px]'
    const top_panel = document.createElement('div')
    top_panel.className = 'top_panel w-full h-[60px]'
    const exit_btn = document.createElement('button')
    exit_btn.className = 'exit_btn rounded-[5px] h-[30px] w-[40px] flex items-center justify-center'
    exit_btn.textContent = 'Back'
    top_panel.appendChild(exit_btn)
    login_card.appendChild(top_panel)
    login_card.appendChild(user_input)
    login_card.appendChild(user_password)
    login_card.appendChild(user_confirmation_btn)
    const overlay = document.createElement('div')
    overlay.className = 'overlay-layer'
    overlay.appendChild(login_card)
    body.appendChild(overlay)
    login_card.classList.add('card_login_animation')


    user_confirmation_btn.addEventListener('click', () => {
        let user_login = document.getElementById("user_login").value.trim()
        let user_pass = document.getElementById("user_pass").value.trim()
        let storedData = JSON.parse(localStorage.getItem(user_login))
        if (storedData === null) return alert("Email or Password is incorrect!")
        if (Number(storedData.password) === Number(user_pass)) {
            alert("Login successful")
            overlay.remove()
            login_card.remove()
        }
        else {
            alert("Login failed")
        }
    })



    exit_btn.addEventListener('click', () => {
        overlay.remove()
        login_card.remove()
    })

}


export function create_sign_login(){
    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'user_login'
    input.className = 'border border-gray-300 text-gray-700 mt-12'
    input.placeholder = 'Enter your email address'
    input.required = true
    const password = document.createElement('input')
    password.type = 'password'
    password.id = 'user_pass'
    password.className = 'border border-gray-300 text-gray-700 mt-12'
    password.placeholder = 'Enter your password'
    password.required = true
    const btn_confirm = document.createElement('button')
    btn_confirm.id = 'btn_confirm'
    btn_confirm.textContent = "Next"
    btn_confirm.className = 'mt-12 submit_btn h-[35px] w-[50px] border border-gray-300 text-gray-700 color-black font-bold'

    const card = document.createElement('div')
    card.className = 'card bg-white w-[auto] h-[380px]'
    const top_panel = document.createElement('div')
    top_panel.className = 'top_panel w-full h-[60px]'
    const exit_btn = document.createElement('button')
    exit_btn.className = 'exit_btn rounded-[5px] h-[30px] w-[40px] flex items-center justify-center'
    exit_btn.textContent = 'Back'
    top_panel.appendChild(exit_btn)
    card.appendChild(top_panel)
    card.appendChild(input)
    card.appendChild(password)
    card.appendChild(btn_confirm)
    const overlay = document.createElement('div')
    overlay.className = 'overlay-layer'
    overlay.appendChild(card)
    document.querySelector('body').appendChild(overlay)
    card.classList.add('card_login_animation')



    btn_confirm.addEventListener('click', () => {
        console.log("clicked")
        let user_login = document.getElementById("user_login").value
        let user_pass = document.getElementById("user_pass").value
        let data = {
            password: user_pass,
        }
        localStorage.setItem(user_login, JSON.stringify(data))
        alert("Account created successfully")
        overlay.remove()
        card.remove()
    })



    exit_btn.addEventListener('click', () => {
        overlay.remove()
        card.remove()
    })

}


export function activation_card(){
    let body = document.querySelector('body')
    const activation_card = document.createElement('div')
    activation_card.className = 'card bg-white w-[auto] h-[380px] '
    const top_panel = document.createElement('div')
    top_panel.className = 'top_panel w-full h-[60px]'
    const exit_btn = document.createElement('button')
    exit_btn.className = 'exit_btn rounded-[5px] h-[30px] w-[40px] flex items-center justify-center'
    exit_btn.textContent = 'Back'
    top_panel.appendChild(exit_btn)
    activation_card.appendChild(top_panel)
    const box = document.createElement('div')
    box.className = 'activation_box w-[50%] h-full ' +
        'text-white text-lg font-bold rounded-bl-[9px]'
    box.textContent = 'Log In'

    const box2 = document.createElement('div')
    box2.className = 'activation_box w-[50%] h-full ' +
        'text-white text-lg font-bold rounded-br-[9px]'
    box2.textContent = 'Sign Up'

    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper w-full h-full flex flex-row justify-evenly items-center' +
        'transition-all duration-500'
    wrapper.appendChild(box)
    wrapper.appendChild(box2)
    activation_card.appendChild(wrapper)
    const overlay = document.createElement('div')
    overlay.className = 'overlay-layer'
    overlay.appendChild(activation_card)
    body.appendChild(overlay)


    exit_btn.addEventListener('click', function exit() {
        overlay.remove()
        activation_card.remove()
    })

    box.addEventListener('click', () => {
        overlay.remove()
        activation_card.remove()
        create_card_login()
    })
    box2.addEventListener('click', () => {
        overlay.remove()
        create_sign_login()
    })

}

// =================NOT FINISHED=================



// =================NOT FINISHED=================

export function innitActivationToggle(){
    const activate_btn = document.querySelector('#theme-btn2')
    activate_btn.addEventListener('click', () => {
        activation_card()
    })
}