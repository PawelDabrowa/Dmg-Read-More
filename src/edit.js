import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { postId, postTitle, postLink } = attributes;
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchTerm) {
            apiFetch({ path: '/wp/v2/posts?per_page=5' }).then(posts => {
                setPosts(posts);
                setLoading(false);
            });
        }
    }, [searchTerm]);

    const searchPosts = (term) => {
        setSearchTerm(term);
        setLoading(true);
        apiFetch({ path: `/wp/v2/posts?search=${term}&per_page=5` }).then(posts => {
            setPosts(posts);
            setLoading(false);
        });
    };

    const selectPost = (post) => {
        setAttributes({
            postId: post.id,
            postTitle: post.title.rendered,
            postLink: post.link,
        });
    };

    return (
        <div {...useBlockProps()}>
            <TextControl
                label={__("Search for a post", "dmg-read-more")}
                value={searchTerm}
                onChange={(term) => searchPosts(term)}
            />
            {loading && <p>{__("Loading...", "dmg-read-more")}</p>}
            {posts.length > 0 && (
                <SelectControl
                    label={__("Posts", "dmg-read-more")}
                    value={postId}
                    options={posts.map(post => ({
                        label: post.title.rendered,
                        value: post.id
                    }))}
                    onChange={(postId) => {
                        const post = posts.find(p => p.id == postId);
                        selectPost(post);
                    }}
                />
            )}
            {postLink && (
                <p className="dmg-read-more">
                    {__("Read More: ", "dmg-read-more")}<a href={postLink}>{postTitle}</a>
                </p>
            )}
        </div>
    );
}
