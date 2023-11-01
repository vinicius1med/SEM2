const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const qrContainer = document.querySelector('#qr-code')
const qrText = document.querySelector('.qr-text')
const sizes = document.querySelector('.sizes')
const shareBtn = document.querySelector('.share-btn')
const download = document.querySelector('.download-btn')

let colorLight = '#fff', 
    colorDark = '#000',
    text = 'www.ifms.edu.br',
    size = 300;

// add event

dark.addEventListener('input', handleDarkColor)
light.addEventListener('input', handleLightColor)
qrText.addEventListener('input', handleQRText)
sizes.addEventListener('change', handleSize)

// Ao abrir a janela ja iniciar o QRCode, porém esta dando erro........
// window.onload = generateQRCode();

// functions create

function handleDarkColor(e) {
    colorDark = e.target.value
    generateQRCode()
    // console.log(colorDark)
}

function handleLightColor(e) {
    colorLight = e.target.value
    generateQRCode()
    // console.log(colorLight)
}

function handleQRText(e){
    ///////////////////////////////////// aqui vai dar um erro Undefined
    text = e.target.value
    generateQRCode()

}

function handleSize(e){
    size = e.target.value
    generateQRCode()
}

// GERANDO O QR CODE

async function generateQRCode(){
    qrContainer.innerHTML = ''
    new QRCode('qr-code',{
        text, 
        height: size,
        width: size,
        colorLight,
        colorDark,
    })
    download.href = await resolveDataUrl()
}

// Não será cobrado na prova
function resolveDataUrl(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = document.querySelector('#qr-code img')
            if (img.currentSrc) {
                resolve(img.currentSrc)
                return
            }
            const canvas = document.querySelector('canvas')
            resolve(canvas.toDataURL())
        }, 50)
    })
}

