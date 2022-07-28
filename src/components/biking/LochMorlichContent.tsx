import React from 'react';
import lochmorlichimg from '../../assets/loch-morlich1.png';
import cairngormsimg from '../../assets/cairngorms.png';

export default function LochMorlichContent() {
    return (
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="bi bi-bicycle" /> Loch Morlich &amp; Cairngorms
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img src={lochmorlichimg} alt="" className="img-fluid shadow-lg mb-4 polaroid" />
                    </div>

                    <p>Whilst up on holiday in Carrbridge I took the kids on a wee jaunt around Loch Morlich on the bikes. We set off from the first small car-park, near the ironbridge and took the gentle track round through the woods.</p>

                    <p>There is a really nice wee burn to cross, which the kids took the bridge and the big kid cycled through, much to their annoyance. A brief water stop and on we continued.</p>

                    <p>I’ve done my fair share of biking around forestry tracks, but riding along with the two of them, in the warmth and not a care in the world – was particularly enjoyable. They were following their directions well, saying hello to all the lovely people we passed on the way – very proud and happy.</p>

                    <p>The trail has a very moderate wee climb and a nice decent too, then it ambles through the woods some more before coming out at the larger ‘beach’ car-park. Which on this particular day looked totally manic. Everyone and their granny was there, so negotiating the transition to the ‘Old Logging Way’ (OLW) on the other side of the road was a little tense.</p>

                    <p>Not made any easier by the wee one cycling into her big brother when he stopped in the middle of the trail. No broken bones, but looked a sore one.</p>

                    <p>We made it across onto the OLW and made our way down the much narrower and busier path. Some of the folks we met were patient and took into consideration the size and speed of the kids – others unfortunately didn’t. Making little effort (if any) to pull in or slow down. A bit of a sour taste left by this part of the route to be honest, but the kids didn’t seem too bothered, so mustn’t grumble.</p>

                    <p>Made our way back to the set off point and met up with the boss. Went a wee run up to the Cairgorm Mountain Ski Centre and had some lovely sandwiches / refreshments.</p>

                    <p>All in all – a cracking wee adventure for the kids. They got a good wee outing on their bikes and when we went up the mountain they could see the Loch from a different angle and saw just how far they’d ridden. Only the fourth or fifth cycle Orla’s done since coming off her stabilisers.</p>

                    
                    <div className="text-center">
                        <img src={cairngormsimg} alt="" className="img-fluid shadow-lg mb-4 polaroid" />
                    </div>
                </div>
            </div>
        </div>   
    );
}