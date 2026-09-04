const openButton1 = document.getElementById("openPopup1");

openButton1.addEventListener("click", function () {
    // Create the popup
    const popup1 = document.createElement("div");
    popup1.classList.add("popup");

    // Add text and close button
    popup1.innerHTML = `
        <div class="popup-content">
            <h2>Ugly As You</h2><br>
                <p>
                    Something Going On<br>
                    <br>
                    There’s something going <br>
                    Something very wrong<br>
                    Too much going on<br>
                    This world is falling down<br>
                    <br>
                    (Chorus)
                    <br>
                    Say what you wanna say<br>
                    Say what you wanna say<br>
                    Say what you wanna say to me<br>
                    <br>
                    There’s something going on<br>
                    Chaos’ all around<br>
                    Accusations unfold<br>
                    The system has a hold<br>
                    <br>
                    (Chorus)
                    <br>
                    There’s movement on the ground<br>
                    Conditions very <br>
                    Violence in the air<br>
                    A battle that’s unfair<br>
                    <br>
                    (Chorus)<br>
                    (Break) Lead<br>
                    <br>
                    It’s getting hard to breathe<br>
                    Strength is what I need<br>
                    The sky is getting grey<br>
                    I hear that music play<br>
                    <br>
                    (Chorus)
                    <br>
                    The streets are getting clear<br>
                    The end is coming near<br>
                    Never backing down<br>
                    We’re taking back our town<br>
                    <br>
                    (Chorus)
                </p>
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup1);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup1.remove();
    });
});             


const openButton2 = document.getElementById("openPopup2");

openButton2.addEventListener("click", function () {
    // Create the popup
    const popup2 = document.createElement("div");
    popup2.classList.add("popup");

    // Add text and close button
    popup2.innerHTML = `
        <div class="popup-content">
            <h2>Ugly As You</h2><br>
                  <p>
                    If I could have you back<br>
                    I would break you too<br>
                    A fool with a vengeance<br>
                    Knowing its senseless<br>
                    <br>
                    I’d lock you in closet<br>
                    Leave you in desert<br>
                    Not a noble offer:<br>
                    to share my torture!<br>
                    <br>
                    Chorus:<br>
                    <br>
                    All this sickness - you made me into<br>
                    I can’t resist - hating me and you<br>
                    <br>
                    If I could have you back<br>
                    I’d paint my heart black<br>
                    I would breach your defence<br>
                    Tear down innocence<br>
                    <br>
                    I would mock your hopes<br>
                    Look what you did to me<br>
                    Left with cruel fantasy<br>
                     ugly as you<br>
                    <br>
                    All this sickness - you made me into<br>
                    I can’t resist - hating me and you<br>
                    <br>
                    If I could have you back<br>
                    I would never enchant<br>
                    Your magnificence<br>
                    With lonely darkness<br>
                    <br>
                    I trace Mona Lisa’s face<br>
                    With finger full extended<br>
                    Pointing to the place<br>
                    Where you and I ended<br>
                    <br>
                    All this sickness - you made me into<br>
                    I can’t resist - hating me and you<br>
                    <br>
                    (Bridge)<br>
                    <br>
                    All this sickness - you made me into<br>
                    I can’t resist - hating me and you<br>

                    If I could have you back<br>
                    I would never enchant<br>
                    Your magnificence<br>
                    With lonely darkness<br>
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup2);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup2.remove();
    });
});             

const openButton3 = document.getElementById("openPopup3");

openButton3.addEventListener("click", function () {
    // Create the popup
    const popup3 = document.createElement("div");
    popup3.classList.add("popup");

    // Add text and close button
    popup3.innerHTML = `
        <div class="popup-content">
            <h2>Black Wall</h2><br>
                  <p>
                    Verse I<br>
                    <br>
                    Nothing burns against the wall of darkness.<br>
                    No time machine brings back peace in: my soul.<br>
                    I just watch you miss me.<br>
                    No return to first kiss(es).<br>
                    Only my voice ricochet’s against: Black Wall<br>
                    <br>
                    (Chorus)<br>
                    <br>
                    (Repeat 2x’s) You don’t know what it’s like<br>
                    (Whisper) Black Wall<br>
                    And- all – I – have – is -me.<br>
                    <br>
                    Verse II<br>
                    <br>
                    Nothing pierces against the wall of darkness.<br>
                    I find my voice sings back peace in my soul.<br>
                    I made my thoughtful choices.<br>
                    No desire to look back.<br>
                    Only your ship lists and hits against: Black Wall.<br>
                    <br>
                    (Repeat Chorus)<br>
                    <br>
                    You can’t touch me no more.<br>
                    You can’t hurt me no more.<br>
                    That pound of pain disintegrated with the lies that you told.<br>
                    You can’t bruise me no more.<br>
                    You can’t breach my black wall.<br>
                    You demonstrated all the hate that you kept bringing along.<br>
                    Take your image and go!<br>
                    All your privileges gone!<br>
                    You violated all my trust from the beginning of time.<br>
                    Take your shame and move on.<br>
                    Don’t let me catch you around.<br>
                    Let me show you what my Black Wall can do!<br>
                    <br>
                    (Repeat Chorus)<br>
                    <br>
                    • (Lead Break)-<br>
                    <br>
                    (Repeat 2x’s) You don’t know what it’s like<br>
                    (Whisper) Black Wall<br>
                    And- all – I – have – is -me.<br>
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup3);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup3.remove();
    });
});  

const openButton4 = document.getElementById("openPopup4");

openButton4.addEventListener("click", function () {
    // Create the popup
    const popup4 = document.createElement("div");
    popup4.classList.add("popup");

    // Add text and close button
    popup4.innerHTML = `
        <div class="popup-content">
            <h2>Ranting About My Generation</h2><br>
                  <p>
                    
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup4);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup4.remove();
    });
});  