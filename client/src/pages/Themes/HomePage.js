import NavBar from "../../components/NavBar";

const HomePageLayout = ({authToken, children}) => {
    return (
        <>
            <NavBar authToken={authToken}/>
            <div>
                {children}
            </div>
            <footer className="p-5 pb-2">
                <p>
                    Single people, listen up: If you're looking for love, want to start dating, or just keep it casual, you need to be on Mates. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Mates, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.
                </p>
                <p>
                There really is something for everyone on Mates. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Mates U’s got you covered. Mates isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.
                </p>
                <hr />
                <div className="text-center">
                © Copyright Mates.com 2023. All rights reserved.
                </div>
            </footer>
        </>
    );
}

export default HomePageLayout;