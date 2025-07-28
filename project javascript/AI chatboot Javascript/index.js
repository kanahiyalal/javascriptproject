let prompt = document.querySelector("#prompt")
let chatContainer = document.querySelector(".chat-container")
let imagebtn = document.querySelector("#image")
let image = document.querySelector("#image img")
let imageinput = document.querySelector("#image input")


const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyATn7iDMDRLmsOLP1Wh3Q6z6iTN4nDdgD0"


let User = {
    message: null,
    file: {
        mime_type: null,
        data: null
    }
}



async function generateResponse(AichatBox) {
    let text = AichatBox.querySelector(".ai-chat-area")
    let RequestOption = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "contents": [{
                "parts": [{ "text": User.message }, (User.file.data ? [{ "inline_data": User.file }] : [])]
            }]
        })
    }
    try {
        const response = await fetch(Api_Url, RequestOption);
        const data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
        text.innerHTML = apiResponse


    } catch (error) {
        console.error("Fetch error:", error);
    } finally {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })
        image.src = `img.svg`
        image.classList.remove("choose")
        User, file = {}
    }
}






function createChatBox(html, classes) {
    let div = document.createElement("div")
    div.innerHTML = html
    div.classList.add(classes)
    return div
}



function handlechatResponse(usermessage) {
    User.message = usermessage
    let html = `   <img src="./user images.jpg" alt="" id="UserImage" width="50">
            <div class="user-chat-area">
            ${User.message}
            ${User.file.data?`<img src="data:${User.file.mime_type};base64,${User.file.data}" class="chooseimg"/>`:""}
            </div>`
    prompt.value = ""
    let UserChatBox = createChatBox(html, "user-chat-box")
    chatContainer.appendChild(UserChatBox)
    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })

    setTimeout(() => {
        let html = `<img src="./AI IMAGE.avif" alt="" id="AiImage" width="10%">
            <div class="ai-chat-area">
            <img src="./loading.gif" alt="" class="load" width="300px" height="50px">


            </div>`
        let AichatBox = createChatBox(html, "ai-chat-box")
        chatContainer.appendChild(AichatBox)
        generateResponse(AichatBox)

    }, 600)





}




prompt.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        handlechatResponse(prompt.value)
    }

})

imageinput.addEventListener("change", () => {
    const file = imageinput.files[0]
    if (!file) return
    let reader = new FileReader()
    reader.onload = (e) => {
        let base64string = e.target.result.split(",")[1]
        User.file = {
            mime_type: file.type,
            data: base64string
        }
        image.src=`data:${User.file.mime_type};base64,${User.file.data}`
        image.classList.add("choose")




    }
    reader.readAsDataURL(file)
})



imagebtn.addEventListener("click", () => {
    imagebtn.querySelector("input").click()
})