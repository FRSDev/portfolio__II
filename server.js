const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about  = {
        avatar: "https://avatars3.githubusercontent.com/u/61279244?s=400&u=419083de1f1d460e64a118b50eb33e756280e032&v=4",
        name: "Francisco Rodrigues dos Santos",
        role: "Programador Full Stack",
        description: `Tecnologo em Analise e Desenvolvimento de Silstemas pela FACEMA.
        Colaborador da F K Transportes e <a href="#" target="blankc">Magazine Luiza</a>`,
        links: [
            { name: "GitHub", url: "https://github.com/FRSDev"},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/santozrodrigues/"},

        ]
    }
    return res.render("about", {about: about})
})


server.get("/projetos", function (req, res) {
    return res.render("projetos", { itens: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        if(video.id == id) {
            return true
        }
    })
    if(!video){
        return res.send("Video nof found!")
    }

    return res.render("video", { item: video })
})

server.listen(3000, function () {
    console.log("Running in PORT 3000")
})