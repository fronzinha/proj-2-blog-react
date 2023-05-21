import { useEffect, useState } from "react";
import { Title } from "../../components/Tittle";
import { Post } from "../../components/post";
import { getPost } from "../../api/blogApi";
import { PostContainer } from "./styles";

export const HomePage = () => {
    const [post, setPost] = useState([]);

    const handleGetPost = async () => {
        const response = await getPost();
        setPost(response.data);
    };

    useEffect(() => {
        handleGetPost();
    }, []);

    return (
        <>
            <Title>Listagem de Post</Title>

            <PostContainer>
                {post.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            author={post.author}
                            createAt={post.createdAt}
                        />
                    );
                })}
            </PostContainer>
        </>
    );
};
