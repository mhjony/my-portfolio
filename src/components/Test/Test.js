import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
import myImage from "./media/myImage.png"

class App extends Component {
    render() {
        return (
            <div>
                /* Sky adapts size to its container */
                <Sky
                    images={{
                        /* FORMAT AS FOLLOWS */
                        0: "https://linkToYourImage0",  /* You can pass as many images as you want */
                        1: "https://linkToYourImage1",
                        2: myImage /* you can pass images in any form: link, imported via webpack... */
                        /* 3: your other image... */
                        /* 4: your other image... */
                        /* 5: your other image... */
                        /* ... */
                    }}
                    how={130} /* Pass the number of images Sky will render chosing randomly */
                    time={40} /* time of animation */
                    size={'100px'} /* size of the rendered images */
                    background={'palettedvioletred'} /* color of background */
                />
            </div>
        );
    }
}

export default App;