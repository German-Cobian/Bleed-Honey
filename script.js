const openButton1 = document.getElementById("openPopup1");

openButton1.addEventListener("click", function () {
    // Create the popup
    const popup1 = document.createElement("div");
    popup1.classList.add("popup");

    // Add text and close button
    popup1.innerHTML = `
        <div class="popup-content">
            <h2>Something Going On</h2><br>
                <p>
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

const openButton5 = document.getElementById("openPopup5");

openButton5.addEventListener("click", function () {
    // Create the popup
    const popup5 = document.createElement("div");
    popup5.classList.add("popup");

    // Add text and close button
    popup5.innerHTML = `
        <div class="popup-contentB">
            <h2>Ruben Montoya</h2><br>
                  <p>
                    Ruben was born in Chula Vista and raised in National City, California.<br>
                    <br>
                    Ruben Montoya’s musical journey began early in the pews of his local evangelical church. 
                    Developing his skills alongside his family, he learned to sing and play both drums and bass 
                    guitar during church services.  This provided a foundational experience that shaped his lifelong passion 
                    for rhythm and melody.<br>
                    <br>
                    His musical background bridges classic gospel and iconic 1960s pop songwriting. Ruben 
                    appreciates all types of music, and considers his influences to be widespread over time.<br>
                    <br>
                    It’s hard for Ruben to say he has a favorite band, because he doesn’t even have a favorite 
                    color.  In particular, Ruben was deeply influenced by the soulful arrangements of Andraé 
                    Crouch; as well as the timeless harmonies and studio innovation of The Beatles and The Beach
                    Boys.<br>
                    <br>
                    Ruben has owned his own music studio and produced musicians from all musical genres.<br>
                    <br>
                    Ruben brings a rich, multi-instrumental perspective to his work. Ruben is proficient on the 
                    bass, drums, guitar and also is a vocalist.  Today, Ruben writes, performs, and produces 
                    music with Bleed the Honey.<Br>
                    <br>
                    Ruben believes in Ephesians 2:10 — “we are his workmanship, created… unto good works.”
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup5);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup5.remove();
    });
});

const openButton6 = document.getElementById("openPopup6");

openButton6.addEventListener("click", function () {
    // Create the popup
    const popup6 = document.createElement("div");
    popup6.classList.add("popup");

    // Add text and close button
    popup6.innerHTML = `
        <div class="popup-contentB">
            <h2>Sean Bradley</h2><br>
                  <p>
                    Sean began learning guitar from his grandfather, a jazz guitarist who first introduced him 
                    to the instrument and sparked his love for music.  Sean later purchased a keyboard workstation,
                    where he began creating rap and hip-hop beats and collaborating with local artists. He also 
                    worked with hip-hop producers, adding guitar rhythms and textures to their tracks.<br>
                    <br>
                    After being influenced by flamenco music, Sean eventually purchased a beginner classical guitar.
                    What started as an exploration of flamenco-inspired sounds grew into a deep appreciation for 
                    guitar rhythm, strumming, and songwriting.<br>
                    <br>
                    While continuing to learn guitar, Sean would jam with friends, writing and composing songs 
                    together in their garage. Those early sessions helped shape his passion for creating music with 
                    others.<br>
                    Today, Sean continues that journey as a songwriter and composer with Bleed the Honey, 
                    bringing together his love of guitar, rhythm, collaboration, and diverse musical influences.<br>
                    <br>
                    Sean loves all styles of music- as long as the music moves him. His influences: The Beatles,
                    Prince, Def Leppard, Bob Marley, Jesse Cook,  Habib Kiote, Strunz & Farah, Paco De Lucia, 
                    Nirvana, The Police, Sting, Van Halen, Joe Satriani, Phil Collins, Genesis, Dr. Dre, Peter 
                    Gabriel, Jim Hendrix, Earth Wind and Fire, U2, Toto, Sona Jorbarteh, The Beach Boys, Bach, 
                    Gypsy Kings, Rodrigo Y Gabriela, Armik, Charly Garcia, The Rippingtons, The Doors, The Who, 
                    Depeche Mode, Three Plus, Ekolu, Pacifica, Las Robertas, Matteo Mancuso, Daft Punk, 
                    Led Zeppelin, Whodini, Lionel Richie, Journey, Chicago, The Cars, Guns N' Roses, Foo 
                    Fighters, Hall & Oats, Alanis Morissette, Sly and The Family Stone, Bill Withers, John 
                    Williams, Metallica, Megadeth, Queen, Scorpions, UB40, Neil Diamond, Randy Lorenzo, 
                    Foreigner, My Father & Grandfather.<br>
                    <br>
                    Sean Bradley: “Open mindedness is the key to musical creation.”
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup6);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup6.remove();
    });
});  

const openButton7 = document.getElementById("openPopup7");

openButton7.addEventListener("click", function () {
    // Create the popup
    const popup7 = document.createElement("div");
    popup7.classList.add("popup");

    // Add text and close button
    popup7.innerHTML = `
        <div class="popup-contentB">
            <h2>Mark Scott Bagula</h2><br>
                  <p>
                    Born to an artist mother in San Diego who painted in different styles well, and a father 
                    engineer who created the first few waves of semiconductors.<br>
                    <br>
                    Growing up Mark was surrounded by creativity, artists, poets and original musicians.<br>
                    <br>
                    Mark began writing poetry at 13, and by 15 provided lyrics for a 45 record.<br>
                    <br>
                    Concluding creativity was etheral, not practical, Mark learned Chinese, lived in Hong Kong
                    and Taiwan, became a stockbroker, went to UCSD and USD Law School for 5 1/2 years (combined)
                    and settled down as an attorney to help raise two fundamentally amazing children with the 
                    most brilliant and beautiful person he has ever known.<br>
                    <br>
                    Along the way he has written well over 1,100 poems, some of which his lifefriends in Bleed 
                    The Honey have made into songs.<br>
                    <br>
                    Inspirations are neverending: Beatles, Janis Joplin, Eagles, Heart, Queen, Bob Dylan, Devo,
                    Sex Pistols, Clash, Jim Carroll, Peter Gabriel, Police, Queensryche, Jimi Hendrix, John 
                    Hiatt, Elvis Costello, Blondie, Led Zeppelin, Metallica, Everclear, Cold Play, Springsteen, 
                    Billy Joel, Pat Benatar, Tom Petty, Fleetwood Mac, AC/DC, Dio, Prince, Eurythmics, Elton 
                    John, Erica Badu, Rod Stewart, Billie Holiday, Trent Reznor, Live, Boston, Mozart, Mumford 
                    & Sons, Sade, Garbage, White Stripes.<br>
                    <br>
                    Mark’s bent toward surrealism has helped him create videos with the limited wonder of AI; 
                    and guided him to a new form of creativity he once could only see in his mind.<br>
                    <br>
                    Mark believes all creation comes from the creator; and it is our short missionionary purpose
                    to catalyze all forms of creativity.<br>
                    <br>
                    C.S. Lewis, The Business of Heaven,<br>
                    <br>
                    “I know that to create is defined as ‘to make out of nothing,’ ex nihilo… This act, as it is for God, must always remain totally inconceivable to man. For we — even our poets and musicians and inventors — never, in the ultimate sense, make. We only build. We always have materials to build from. All we can know about the act of creation must be derived from what we can gather about the relation of the creatures to their Creator.”
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup7);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup7.remove();
    });
}); 

const openButton8 = document.getElementById("openPopup8");

openButton8.addEventListener("click", function () {
    // Create the popup
    const popup8 = document.createElement("div");
    popup8.classList.add("popup");

    // Add text and close button
    popup8.innerHTML = `
        <div class="popup-contentB">
            <h2>Rene Ibarra</h2><br>
                  <p>
                    Rene is a native San Diegan who has been making original music since high school. His 
                    expression crosses many genres.<br>
                    <br>
                    Rene is blessed with musically talented brothers, and 
                    friends, who have supported his creativity throughout.  Growing up in a family of musicians,
                    music was always a part of his life. Rene’s grandfather, uncle, and brothers all played 
                    music, and after getting his first Casio keyboard, his musical history began.  That history
                    involved his first inspiration to create a band after seeing his brothers and his friend 
                    play in a venue.<br>
                    <br>
                    Rene went on to play in several bands and developed a deep appreciation
                    for many different styles and eras of music. Due to Rene’s long experience with music, 
                    his musical constructions provide unique perspectives reflecting his wide scope of 
                    influences.<br>
                    <br>
                    Rene professionally has applied his college degree to social work benefiting
                    children and the less financially advantaged.  These professional experiences have also
                    shaped the content of his songs.<br>
                    <br>
                    Rene plays keyboards, bass, guitar and does music mixing.<br>
                    <br>
                    Rene’s musical influences are much more than only: Beach Boys, Beatles, Doors, John Williams
                    , Beethoven, Metallica, Chemical Brothers, Bob Marley, Fatboy Slim, Yaz, Erasure, Pet Shop 
                    Boys, George Michael, Frank Sinatra, Elvis Presley, Kraftwerk, Elton John, Billy Joel, 
                    Black Sabbath, New Order, Tears For Fears, Van Halen, Men At Work, The Specials, Daft Punk, 
                    Dr. Dre, Snoop Dogg, Grandmaster Flash, Run D Mc, The Police, Chicago, Sting, America, 
                    Bread, Phil Collins, Queen, INXS and Genesis.<br>
                    <br>
                    Rene says, “My music is shaped by a lifelong love of discovering sounds, artists, and genres
                    that continue to inspire me.”  Due to this, Rene agrees:  “Imagination is more important 
                    than knowledge “ Albert Einstein.
                  </p>
             
                <button id="closePopup" type="button" class="btn black white-text">Close</button>
        </div>
    `;

    // Add popup to the page
    document.body.appendChild(popup8);

    // Make the close button remove the popup
    document.getElementById("closePopup").addEventListener("click", function () {
        popup8.remove();
    });
});
