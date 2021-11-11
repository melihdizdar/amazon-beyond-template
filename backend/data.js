import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Melih',
            email:'admin@example.com',
            password: bcrypt.hashSync('admin123',8),
            isAdmin:true,
            isSeller:true, //58.Bugfix runnig locally without issue
            seller: {
                name: 'Puma', //58.Bugfix runnig locally without issue
                logo: '/images/logo1.png', //58.Bugfix runnig locally without issue
                description: 'best seller', //58.Bugfix runnig locally without issue
                rating: 4.5, //58.Bugfix runnig locally without issue
                numReviews: 120, //58.Bugfix runnig locally without issue
                },
        },
        {
            name:'Ahmet',
            email:'user@example.com',
            password: bcrypt.hashSync('user123',8),
            isAdmin:false,
        }
    ],
    products:[
       {
           name:'Nike Slim Shirt',
           category:'Shirts',
           image:'/images/p1.jpg',
           price:120,
           coutInStock:10,
           brand:'Nike',
           rating:4.5,
           numReviews:10,
           description:'high quality product',
       },
       {
        name:'Adidas Slim Shirt',
        category:'Shirts',
        image:'/images/p2.jpg',
        price:100,
        coutInStock:20,
        brand:'Adidas',
        rating:4.0,
        numReviews:15,
        description:'high quality product',
    },
    {
        name:'Lacoste Free Shirt',
        category:'Shirts',
        image:'/images/p3.jpg',
        price:220,
        coutInStock:0,
        brand:'Lacoste',
        rating:4.8,
        numReviews:17,
        description:'high quality product',
    },
    {
        name:'Nike Slim Pant',
        category:'Pants',
        image:'/images/p4.jpg',
        price:78,
        coutInStock:15,
        brand:'Nike',
        rating:4.5,
        numReviews:14,
        description:'high quality product',
    },
    {
        name:'Puma Slim Pant',
        category:'Pants',
        image:'/images/p5.jpg',
        price:65,
        coutInStock:5,
        brand:'Puma',
        rating:4.5,
        numReviews:10,
        description:'high quality product',
    },
    {
        name:'Adidas Slim Pant',
        category:'Pants',
        image:'/images/p6.jpg',
        price:139,
        coutInStock:12,
        brand:'Adidas',
        rating:4.5,
        numReviews:15,
        description:'high quality product',
    },
    ],
    homeCards:[
        {
            homeImage:'/images/p1.jpg',
            homeHeader:'Ethically Made',
            homeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend risus eget felis fermentum, id ultricies velit suscipit. Nam pellentesque libero hendrerit elementum viverra. Cras feugiat metus eu purus dignissim eleifend. Mauris rutrum volutpat felis sit amet tempor. In hac habitasse platea dictumst. Pellentesque rhoncus lacus id turpis condimentum placerat. Mauris efficitur tortor viverra lectus finibus ornare.',
        },
        {
            homeImage:'/images/p2.jpg',
            homeHeader:'Organic Cotton',
            homeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend risus eget felis fermentum, id ultricies velit suscipit. Nam pellentesque libero hendrerit elementum viverra. Cras feugiat metus eu purus dignissim eleifend. Mauris rutrum volutpat felis sit amet tempor. In hac habitasse platea dictumst. Pellentesque rhoncus lacus id turpis condimentum placerat. Mauris efficitur tortor viverra lectus finibus ornare.',
        },
        {
            homeImage:'/images/p3.jpg',
            homeHeader:'Hand Screem Printed',
            homeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend risus eget felis fermentum, id ultricies velit suscipit. Nam pellentesque libero hendrerit elementum viverra. Cras feugiat metus eu purus dignissim eleifend. Mauris rutrum volutpat felis sit amet tempor. In hac habitasse platea dictumst. Pellentesque rhoncus lacus id turpis condimentum placerat. Mauris efficitur tortor viverra lectus finibus ornare.',
        }
    ],
    personalContents:[
        {
            aboutHeader:'About',
            aboutHeader2:'Our Story',
            aboutSlogan:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, aperiam.',
            aboutSlogan2:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptate voluptatum laudantium vero exercitationem praesentium id laboriosam aperiam dolor modi.',
            aboutTitle:'FOUNDER',
            aboutNameSurname:'Name Surname',
            aboutBioContent:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsum nihil ab vel provident, debitis harum expedita dolor cupiditate doloremque.',
            aboutBioContent2:'This is Mark’s story.',
            aboutImage:'/images/about.jpg',
            aboutBioQuotation:'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odio molestias eligendi numquam architecto."',
        }
    ],
    textContents:[
        {
            aboutContentHeader:'Header 1',
            aboutContentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic natus, optio sit obcaecati odit ipsam amet expedita! Quisquam itaque saepe ad hic debitis id et doloribus placeat explicabo minima. Laboriosam vel tempora debitis at quaerat facilis mollitia praesentium, repellendus voluptas et impedit facere reprehenderit illo unde eligendi, deleniti velit. Repellat magnam perferendis eveniet quis vel! Quaerat enim excepturi corporis quas ut, a inventore sunt, autem voluptate minus voluptates officia magni expedita animi sed, laborum culpa dolorem ipsum sint labore similique nihil esse adipisci dicta. Ex provident obcaecati minima amet suscipit, architecto possimus nihil ab? Quo laudantium enim unde molestias cum dignissimos tempora. Hic, voluptatibus! At ipsam, voluptatibus in saepe ex aut! At, dolor esse cumque laudantium rem assumenda! Sed velit beatae ex a placeat repellat aliquam consequuntur, vel amet sapiente. Deleniti labore aliquam atque enim incidunt voluptatem est nihil cum necessitatibus? Culpa, nisi? Expedita ut hic vel rem ducimus vero distinctio consectetur sit non ex reiciendis inventore beatae iste veritatis soluta sapiente dignissimos praesentium provident eos, corrupti itaque laboriosam. Iste, expedita dolorum? Incidunt facilis modi tempore saepe est quibusdam cumque accusantium consequuntur sed? Fuga consequuntur nam in, harum ipsam est. Laudantium eum cupiditate accusamus ipsam obcaecati placeat soluta error.',
        },
        {
            aboutContentHeader:'Header 2',
            aboutContentText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sint aperiam dolores, blanditiis qui ut sed fugiat provident quasi. Nobis exercitationem cum distinctio tempore hic qui nemo quaerat non voluptates similique ab, veritatis quia atque eos quod ad sequi est? Commodi expedita fuga laboriosam consequatur dicta illo porro odio earum molestias rerum! Inventore, in. Voluptate, enim asperiores iste, labore eos illum eligendi sapiente optio cum porro nisi cumque necessitatibus ipsa rem officiis aut reiciendis ad exercitationem vel inventore deleniti, quibusdam debitis! Sunt quo accusantium aspernatur reprehenderit doloribus sequi harum, odit soluta tenetur sapiente labore consequuntur repellendus. Ad incidunt ipsam labore, explicabo harum laudantium mollitia, delectus aperiam rem eaque totam, temporibus laborum saepe exercitationem hic. Magnam iste aliquam inventore neque accusamus perspiciatis amet ullam harum expedita deserunt deleniti nulla rem nostrum sequi placeat consequatur, incidunt minima laboriosam, in hic aspernatur? Iusto, quasi quaerat optio qui repellat adipisci corrupti aut ab incidunt, ipsum eveniet consequatur architecto totam esse harum quibusdam facere ex eligendi distinctio! Facere eligendi quos, ipsum quam neque quas quidem consequatur impedit optio dolor tempora illum dicta vel pariatur. Non dolorem ad voluptate in magnam accusamus veniam quasi neque sapiente! Beatae consectetur pariatur obcaecati deleniti consequatur nesciunt eveniet nam voluptatum!',
        },
        {
            aboutContentHeader:'Header 3',
            aboutContentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo fuga corporis provident quia! Modi accusantium vel, voluptates voluptate cupiditate explicabo amet voluptas esse quam repellat suscipit inventore odio nam doloribus quod recusandae beatae, placeat temporibus, praesentium itaque rem deleniti sint. A natus quia eos dolor odit laborum similique officia itaque sunt cupiditate nisi non, veniam beatae hic dolores mollitia autem temporibus! Commodi dicta molestiae consequuntur doloremque assumenda in laudantium, eum alias adipisci voluptate itaque, culpa illo ut totam dolore. Sequi omnis amet consectetur accusantium, fugiat ipsa aut modi quas eveniet at dolorum velit nemo autem totam officia, quis neque consequatur nobis. Laboriosam eligendi dolorem deserunt corporis illum corrupti totam deleniti. Rem harum necessitatibus dolor ipsum ullam asperiores doloremque, maiores, ratione vitae, adipisci inventore officiis sequi incidunt illo fuga reiciendis in minus nam soluta quo! Dolorem repellat, possimus tempore error quia expedita culpa dignissimos corporis illum quas sint aperiam obcaecati dicta eligendi, non ullam repudiandae odio? Ratione ducimus dolore libero optio quia doloremque dicta. Obcaecati suscipit minus reiciendis sunt officiis ullam fugit soluta architecto, pariatur totam, minima harum doloremque eum in porro vero culpa natus impedit voluptatum! Iure ipsa, numquam cupiditate inventore unde pariatur dolor, perferendis sunt minus optio dolores.',
        },
        {
            aboutContentHeader:'Header 4',
            aboutContentText:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut amet saepe qui quis dolorem, ducimus harum asperiores nulla excepturi deserunt illum animi repudiandae voluptatibus vel, in neque, mollitia beatae nostrum distinctio! Maiores sequi recusandae quo, praesentium rem minima expedita ab repudiandae? Perferendis odit nihil rem minima nulla eius velit, atque esse! Modi fugiat laborum impedit blanditiis voluptatibus cupiditate dolor a nobis, itaque quae dolore, excepturi, facilis quod nesciunt delectus non laboriosam sapiente suscipit autem facere iure maxime assumenda. Placeat voluptas harum tempore laudantium nihil. Accusantium, perspiciatis dolor! Ullam earum veniam molestias, nemo nobis aliquid libero soluta maxime minus, dolore deserunt corrupti iste? Similique earum expedita hic, recusandae repellendus provident pariatur ducimus aliquam facere sunt sit voluptatibus, ipsam labore quasi ratione adipisci optio consectetur, beatae temporibus corporis. Numquam deserunt maiores ipsa, necessitatibus illum labore aspernatur quae consequuntur eius ea facilis, aut perferendis harum temporibus ducimus, quasi corrupti recusandae fugit voluptate ad! Ullam tempora ipsum labore atque praesentium. Nobis accusamus delectus laudantium, aliquam nesciunt tempore assumenda magni hic magnam exercitationem? Possimus ex perferendis voluptate vitae, tempora dolorum eaque exercitationem ratione! Iure eaque explicabo cumque voluptate eligendi reprehenderit, fugit nemo vero aut sequi amet, cum asperiores ut? Blanditiis magnam qui laboriosam aut hic.',
        }
    ]
}

export default data;