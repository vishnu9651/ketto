import navbar from "/navbar/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import foot from "/navbar/footer.js"
document.getElementById("foot").innerHTML=foot()

var details=[
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/635000/635441/image/wid3493a964938da5ea156b23171a4cc5a3ab947d60.jpg?w=320&dpr=1.0",
      "title": "Born with a cleft lip & failing liver, my son needs a transplant to live",
      "avatar-name": "S",
      "name": "by Sangita",
      "raised-amnt": "raised out of 20,00,000",
      "raised": "11,31,860",
      "items 2": 8,
      "items 4": 963,
      "avatar-img src": "",
      "auto-shining href": "",
      "mat-tooltip-trigger src": ""
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=320&dpr=1.0",
      "title": "My little boy’s cancer has relapsed twice but I’m helpless. Please save",
      "avatar-name": "FF",
      "name": "by Family Friends",
      "raised-amnt": "raised out of 5,00,00,000",
      "raised": "4,03,43,532",
      "items 2": 28,
      "items 4": 20741,
      "avatar-img src": "",
      "auto-shining href": "",
      "mat-tooltip-trigger src": ""
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/167000/167947/image/wid57beaf6d360986134ecdbd89657dd6a2b901a548.jpg?w=320&dpr=1.0",
      "title": "Wife Fears She Will Lose The Father Of Their 2-Year-Old .",
      "avatar-name": "",
      "name": "by Rachit Shrivastava",
      "raised-amnt": "raised out of 1,20,00,000",
      "raised": "1,07,20,280",
      "items 2": 71,
      "items 4": 6902,
      "avatar-img src": "https://kettocdn.gumlet.io/media/individual/1358000/1358229/image/5e58e4fc7b807.jpg?w=50&dpr=1.0",
      "auto-shining href": "",
      "mat-tooltip-trigger src": ""
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/372000/372126/image/wid01ce2a07f56735f26b62aac7c317696e57f1c3f9.png?w=320&dpr=1.0",
      "title": "Help 7yrs old Paarnikka beat Cancer",
      "avatar-name": "",
      "name": "by Rm Agarwal",
      "raised-amnt": "raised out of 3,00,00,000",
      "raised": "98,95,810",
      "items 2": 41,
      "items 4": 4369,
      "avatar-img src": "https://kettocdn.gumlet.io/media/individual/3931000/3931537/image/61d01756407c7.jpg?w=50&dpr=1.0",
      "auto-shining href": "",
      "mat-tooltip-trigger src": ""
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/601000/601050/image/wid6235e460d7a00.jpg?w=320&dpr=1.0",
      "title": "Help End Isolation for Children In Need: Empowering Holistically",
      "avatar-name": "",
      "name": "by HEAL Foundation",
      "raised-amnt": "raised out of 7,57,000",
      "raised": "3,25,256",
      "items 2": 10,
      "items 4": 93,
      "avatar-img src": "https://kettocdn.gumlet.io/media/ngo/5982000/5982264/image/2ef081db92495ea822ad53fb0e98b05fc7231be2.jpg?w=50&dpr=1.0",
      "auto-shining href": "javascript:;",
      "mat-tooltip-trigger src": "https://ketto.gumlet.io/assets/images/Tax-benefit.png?w=100&dpr=1.0"
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/557000/557837/image/wid629f1a5fc7ce6.png?w=320&dpr=1.0",
      "title": "Help Jungle Crows to make champions in sport and life!",
      "avatar-name": "",
      "name": "by Jungle Crows Foundation",
      "raised-amnt": "raised out of 5,00,000",
      "raised": "2,94,340",
      "items 2": 10,
      "items 4": 48,
      "avatar-img src": "https://kettocdn.gumlet.io/media/ngo/2288000/2288218/image/62d0ff84b367c.jpg?w=50&dpr=1.0",
      "auto-shining href": "javascript:;",
      "mat-tooltip-trigger src": "https://ketto.gumlet.io/assets/images/Tax-benefit.png?w=100&dpr=1.0"
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/649000/649069/image/wid62d79cd302620.jpg?w=320&dpr=1.0",
      "title": "My Father Is Fighting For His Life And We Need Your Support To Save",
      "avatar-name": "SH",
      "name": "by Samim Hossain Sardar",
      "raised-amnt": "raised out of 6,00,000",
      "raised": "2,61,304",
      "items 2": 29,
      "items 4": 50,
      "avatar-img src": "",
      "auto-shining href": "",
      "mat-tooltip-trigger src": ""
    },
    {
      "gm-added": "https://kettocdn.gumlet.io/media/campaign/637000/637943/image/wid62a9a5723ac87.jpg?w=320&dpr=1.0",
      "title": "I Need Your Urgent Support For My ovarian cancer Treatment",
      "avatar-name": "BN",
      "name": "by Bharti Nayak",
      "raised-amnt": "raised out of 6,00,000",
      "raised": "1,75,956",
      "items 2": 6,
      "items 4": 90,
      "avatar-img src": "",
      "auto-shining href": "",
      "mat-tooltip-trigger src": ""
    }
  ]
  console.log("vishnu")
  details.map(function(elem){
    let div=document.createElement("div")
    
     let img=document.createElement("img")
   img.src=elem["gm-added"]

    
    console.log("vishnu")
     let title=document.createElement("h3")
 title.innerText=elem.title
 
 let name=document.createElement("p")
 name.innerText=elem.name;
 let amount=document.createElement("div")
amount.id="amount"
let raisedamnt=document.createElement("p")
raisedamnt.innerText=elem["raised-amnt"]
let raised=document.createElement("p")
raised.innerText=elem["raised"]
amount.append(raised,raisedamnt)
//let shareDonate=document.createElement("div")




    let shareDonate=document.createElement("div")
    shareDonate.id="shareDonate"
    let donate=document.createElement("button")
    donate.innerHTML="donate"
donate.id="donate";

    donate.style.backgroundColor="blue"
 let fb=document.createElement("button")
    fb.innerHTML="share"
fb.id="fb"
shareDonate.append(fb,donate)
let part=document.createElement("div")
part.id="part"
part.append(img,title,name,amount,shareDonate)
div.append(part)
 document.querySelector("#cart").append(div)

})