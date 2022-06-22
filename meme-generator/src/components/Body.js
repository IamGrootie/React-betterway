import React from "react"

export default function Body() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setMemeImages] = React.useState()

    React.useEffect(() => {
        console.log("Effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImages(data))
    }, [])

    function imageGenerator() {
        const memesArray = allMemeImages.data.memes
        const randomImageUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url
        setMeme( prevMeme => ({
                ...prevMeme,
                randomImage: randomImageUrl
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme( prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        )
    }

    return (
        <main>
            <div className="form">
                <input
                     type="text" 
                     placeholder="Top text" 
                     className="form--input"
                     name="topText"
                     value={meme.topText}
                     onChange={handleChange}
                     >
                       
                </input>
                <input 
                    type="text" 
                    placeholder="Bottom text"  
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    >
                                
                </input>
                <button 
                    className="form--button"
                    onClick={imageGenerator}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--img"/> 
                <h2 className="meme--text text--top">{meme.topText}</h2>
                <h2 className="meme--text text--bottom">{meme.bottomText}</h2>
            </div>
            
        </main>

    )
}
