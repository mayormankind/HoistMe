const upload = () =>{
    const schema = {
        templateId: uuid(),
        name: "Prospect Tailors",
        components:{
            header:{
                logo: 'images/tailor.jpg',
                text: '',
            },
            home:{
                bodyHeader: 'We make, We create, We deliever',
                bodyContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A totam ut, ipsam neque quis saepe quia, corrupti illo similique asperiores omnis pariatur fugit architecto ipsa impedit earum voluptates dolor qui commodi! Sequi, adipisci, neque assumenda provident doloribus doloremque deserunt nesciunt voluptatum magni ratione dolore ea explicabo beatae quo? Architecto, modi.",
            },
            services:[
                {
                    id: 0,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
                {
                    id: 1,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
                {
                    id: 2,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
                {
                    id: 3,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
                {
                    id: 4,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
                {
                    id: 5,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
                {
                    id: 6,
                    heading: "Mend Clothes",
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.",
                },
            ],
            footer:{
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus ad odio, impedit alias consequuntur!",
                socials:[
                    {icon:<RiInstagramFill/>,link:'http://instagram.com/prospectTailors'},
                    {icon:<RiTwitterFill/>,link:'http://x.com/prospectTailors'},
                    {icon:<RiMailFill/>,link:'http://gmail.com/prospectTailors'},
                    {icon:<RiWhatsappFill/>,link:'http://gmail.com/prospectTailors'},
                ]
            }
        }
    } 
}