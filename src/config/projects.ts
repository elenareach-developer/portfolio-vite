import bithesis from '../assets/bithesis.png'
import dowww from '../assets/dowww.png'
import onedriveVercelIndex from '../assets/onedrive-vercel-index.png'
import substats from '../assets/substats.png'
import vscodeMathToImage from '../assets/vscode-math-to-image.png'

export interface ProjectProps {
  name: string
  link: string
  slug: string
  bimg: string
}

export interface CompanyProps{
  img: string
  description: string
  title: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Substats',
    link: 'https://github.com/spencerwooo/substats',
    slug: 'spencerwooo/substats',
    bimg: substats,
  },
  {
    name: 'onedrive-vercel-index',
    link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    slug: 'spencerwooo/onedrive-vercel-index',
    bimg: onedriveVercelIndex,
  },
  {
    name: 'dowww',
    link: 'https://github.com/spencerwooo/dowww',
    slug: 'spencerwooo/dowww',
    bimg: dowww,
  },
  {
    name: 'BIThesis',
    link: 'https://github.com/BITNP/BIThesis',
    slug: 'BITNP/BIThesis',
    bimg: bithesis,
  },
  {
    name: 'vscode-math-to-image',
    link: 'https://github.com/TeamMeow/vscode-math-to-image',
    slug: 'TeamMeow/vscode-math-to-image',
    bimg: vscodeMathToImage,
  },
]

export const projectsLena  = [
  {img:"/src/assets/charter-logo.png", description: "An invitation to the VIP reception the night prior to event, with access to sponsors, speakers and dignitaries One 6′ exhibitor tabl Exhibitor listing in event program with contact information",skills:["AgularJS", "Pyhon", "MongoDB"], title:"Full Stack Engineer"},
  {img:"/src/assets/ahs-logo.svg", description: "An invitation to the VIP reception the night prior to event, with access to sponsors, speakers and dignitaries One 6′ exhibitor tabl Exhibitor listing in event program with contact information", skills:["React.js","NodeJs","MongoDb"] ,title:"Software Engineer"},
  {img:"/src/assets/codepath-logo.webp", description: "An invitation to the VIP reception the night prior to event, with access to sponsors, speakers and dignitaries One 6′ exhibitor tabl Exhibitor listing in event program with contact information", skills:["Software Development", "Web Applications","Front-end Development"],title:"Full-Stack Software Engineer | Instructor"},
  {img:"/src/assets/dish-logo.png", description: "An invitation to the VIP reception the night prior to event, with access to sponsors, speakers and dignitaries One 6′ exhibitor tabl Exhibitor listing in event program with contact information",skills:["React.js","Python","MySQl"] ,title:"Software Engineer"},
  {img:"/src/assets/27Global-logo.png", description: "An invitation to the VIP reception the night prior to event, with access to sponsors, speakers and dignitaries One 6′ exhibitor tabl Exhibitor listing in event program with contact information",skills:["React.js", " React Native"," AngularJS ","Angular Material", "NnodeJs"] ,title:"Software Engineer"}
]
