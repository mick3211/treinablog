import { FormEvent, useRef, useState } from 'react';
import { ApiService } from '../../data/services/ApiService';
import { Button } from '../../ui/components/Button/Button.styled';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
    PageTitle,
    PostContent,
    PostForm,
} from '../../ui/pages/publish.styled';

const PostPublish: React.FC = () => {
    const { data: session } = useSession(),
        [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState('');

    const blogEditorRef = useRef<HTMLDivElement>(null);

    async function sendPost(ev: FormEvent) {
        ev.preventDefault();
        const content = blogEditorRef.current?.innerHTML || '';
        if (
            title.length > 0 &&
            description.length > 0 &&
            picture.length > 0 &&
            content.length > 0
        ) {
            await ApiService.post('posts', {
                data: {
                    title,
                    description,
                    picture,
                    content,
                },
            });

            resetForm();
        }
    }

    function resetForm() {
        setTitle('');
        setDescription('');
        setPicture('');
        if (blogEditorRef.current) blogEditorRef.current.innerHTML = '';
    }

    if (!session) {
        return <p>Realize o login para criar um novo post</p>;
    }

    return (
        <>
            <PageTitle>Novo Post</PageTitle>
            <PostForm onSubmit={ev => sendPost(ev)}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <input
                    type="url"
                    placeholder="Imagem"
                    value={picture}
                    onChange={ev => setPicture(ev.target.value)}
                />
                <PostContent ref={blogEditorRef} contentEditable />
                <Button type="submit">Publicar</Button>
            </PostForm>
        </>
    );
};

export default PostPublish;
