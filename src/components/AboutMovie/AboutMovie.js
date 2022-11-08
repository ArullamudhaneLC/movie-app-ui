export default function AboutMovie() {
    return (<>
        <div id="paymentContainer">
        <table id="paymentTable">
            <tr>
                <td className="paymentTd">
                    <img src="assets/bloodshot.jpg" width="317px" height="470"/>
                    <img src="assets/bloodshot2.jpg" width="317px" height="470"/> 
                </td>
                <td className="paymentTd1">
                    <h2 id="paymentHead">Bloodshot</h2>
                    <p>MARCH 13, 2020 <span className="paymentSpan">Length: </span> 1h 50m</p><br/>
                    <span className="paymentSpan">Action, Fantasy</span><br/>
                    <br/>
                    <p>IMDb: 5.7/10</p>
        
                    <br/>
                    <button id="paymentButton"><a href="https://www.youtube.com/watch?v=vOUVVDWdXbo"><span id="buttonTextPayment">Trailer</span></a></button>
                    
                </td>
               
            </tr>
        </table> 
        
        
        <div className="about3">
            <h1>Synopsis</h1>
        </div>
        
        <div className="about3">
            <p>Based on the bestselling comic book, Vin Diesel stars as Ray Garrison, a soldier recently killed in action and brought back to life as the superhero 
                Bloodshot by the RST corporation. With an army of nanotechnology in his veins, he's an unstoppable force --stronger than ever and able to heal instantly. 
                But in controlling his body, the company has sway over his mind and memories, too. Now, Ray doesn't know what's real and what's not -- but he's on a mission 
                to find out.
            </p>
            </div>
        
            <div className="about3">
                <h1>Cast</h1>
            </div>
        
            <div className="about3">
                <p>Michael Sheen, Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, Talulah Riley, Lamorne Morris, Guy Pearce, Jóhannes Haukur Jóhannesson, 
                    Alex Hernandez, Siddharth Dhananjay, Tamer Burjaq, Clyde Berning, David Dukas, Charlie Bouguenon, Tyrel Meyer, Frans Steyn, David Davadoss, 
                    Alex Anlos, Nic Rasenti, Ryan Michael Sin, Michael Kirch, Ryan Kruger, Austin Rose, Gary Naidoo, Hilton Sun, Jeremy Jess Boado</p>
            </div>
        
            <div className="about3">
                <h1>Directors</h1>
            </div>
        
            <div className="about3">
                <p>Dave Wilson, Dave Wilson</p>
            </div>
        
            <div className="about3">
                <h1>Producers</h1>
            </div>
        
            <div className="about3">
                <p>Neal H. Moritz, Toby Jaffe, Dinesh Shamdasani, Vin Diesel, Chris Cowles, Dione Wood, Dan Mintz, Yu Dong, 
                    Jeffrey Chan, Matthew Vaughn, Louis G. Friedman, Rita Benson LeBlanc, Buddy Patrick, Steven Matzkin, Sarah Schroeder-Matzkin, 
                    Matthew Rhodes, Jonathan Gray, Matthew Antoun, Mark Strome, Maurice Fadida, Jason Kothari</p>
            </div>
        
            <div className="about3">
                <h1>Writers</h1>
            </div>
        
            <div className="about3">
                <p>Jeff Wadlow, Eric Heisserer, Adam Cozad, Kevin Van Hook, Don Perlin</p>
            </div>
        
            <div className="about3">
                <h1>Check out showtimes for this movie!</h1>
            </div>
        
            <div className="about3">
                <span>Date:<input type="date" className="paymentInput" required onclick="lossUnsaved()"/> At 
                    <select className="paymentInput">
                        <option>Cinema StarCite Montreal</option>
                        <option>Cinema Saint John</option>
                        <option>Cinema StarCite Laval</option>
                        <option>Cinema Strawberry hills</option>
                    </select></span>
                    <br/>
                    Time: <select className="paymentInput">
                        <option>2:00pm</option>
                        <option>4:00pm</option>
                        <option>6:30pm</option>
                        <option>9:30pm</option>
                    </select>
        
                    <br/>
                    <br/>
        
                    <button className="paymentInput2" onclick="ok()">Confirm Payment</button>
            </div>
        
        </div> </>);
}