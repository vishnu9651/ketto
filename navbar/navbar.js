function navbar(){
    return`
<body>
  <div id="nav">
<div id="navLeft">
      <div>
<img id="logo" src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0"/>
</div>   
      <div>
          <p><a href="brows.html">Browse Fundraisers</a></p></div>
      <div><select id="fundFor">
          <option><p>Fundraise For</p></option>
      </select></div>
      <div><p>
          How It Works
      </p></div>
      <div><p>
          Search
      </p></div>
  </div>
      <div id="navRight">
      <div id="chat">
          <p><i class="fa-brands fa-whatsapp"></i></p>
          <p>
          chat
      </p></div>
      <div id="fundRiser"><p>Start a fundriser</p></div>
      
          
      <div id="user"><i class="fa-solid fa-user"></i>
      </div>
      <select id="userSelect"></select>
  </div>
  </div>
  <br>
  `
}
export default navbar