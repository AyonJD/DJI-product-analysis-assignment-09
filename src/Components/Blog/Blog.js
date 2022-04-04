import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className="qna_one px-3 md:px-0">
                <h1 className='text-3xl md:text-4xl font-semibold text-center pt-10 md:pt-20 pb-8'>What is Context API?</h1>
                <img className='w-full md:w-2/3 mx-auto' src="https://i.ibb.co/df8MxDf/context.png" alt="" />
                <div className="content py-10 ">
                    <blockquote className="p-4 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7">
                        <p >“Context provides a way to pass data through the component tree without having to pass props down manually at every level.”</p>
                    </blockquote>
                    <p className='md:w-2/3 md:mx-auto mute'>For a more in-depth definition, it provides a way for you to make particular data available to all components throughout the component tree no matter how deeply nested that component may be.</p>
                    <p className='py-5 md:w-2/3 md:mx-auto mute'>Let us look at this example:</p>
                    <div className="img-section">
                        <img className='w-1/2 md:w-1/3 float-left clear-both rounded-lg md:mr-10 mr-4' src="https://i.ibb.co/FWrfXGP/app.png" alt="" />
                        <p className='mute'>In the example above, we specified the application theme using a props in the ParentComponent called theme. We had to pass that props to all components down the component tree to get it where it is needed which is the GrandChild component. The ChildComponent had nothing to do with the theme props but was just used as an intermediary.</p>
                        <p className='my-10 mute'>Now, imagine the GrandChild component was more deeply nested than it was in the top example. We would have to pass the theme props the same way we did here which would be cumbersome. This is the problem that Context solves. With Context, every component in the component tree has access to whatever data we decide to put in our context.</p>
                        <p className='mute'>With the new Context API, several new functions have been added to the mix creating giving us a rich tool to work with. If you’ve previously attempted to use the old (experimental, do not use) Context API, you may have come across some methods. However, let’s look at some code snippets on how we can use the Context API.</p>
                        <p className='mt-10 mute'>Sometimes we want to change some data in the context, for example changing the theme of the app when a user changes their theme. To do this, we simply connect the data in the context Provider to the state of the parent element and then change this parent’s state using functions in props, a better way is to have the function that will change the context value passed down in the context itself.</p>
                    </div>
                </div>
            </div>
            <div className="qna_two px-3 md:px-0">
                <h1 className='text-3xl md:text-4xl font-semibold text-center pt-20 pb-8'>What is Semantic tag?</h1>
                <img className='w-full md:w-2/3 mx-auto' src="https://i.ibb.co/ySXXNMP/semantic.png" alt="" />
                <div className="content py-10">
                    <p className='mute'>The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. </p>
                    <h1 className='text-xl py-4 font-medium'>Why Do You Need to Use Semantic Tags?</h1>
                    <p className='mb-3'>The are several advantages of using semantics tags in HTML:</p>
                    <ul>
                        <li className='list-disc ml-8 mute'>The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.</li>
                        <li className='list-disc ml-8 mute'>The pages made with semantic elements are much easier to read.</li>
                        <li className='list-disc ml-8 mute'>It has greater accessibility. It offers a better user experience.</li>
                    </ul>
                    <h1 className='text-xl py-4 font-medium'>HTML Semantic Tag Structure.</h1>
                    <ul>
                        <li className='list-disc ml-8 mute'>&lt;header&gt; : tag defines a header for a web page.</li>
                        <li className='list-disc ml-8 mute'>&lt;section&gt; : This defines a section in a web page.</li>
                        <li className='list-disc ml-8 mute'>&lt;article&gt; : This element contains the main part, containing informationabout the web page.</li>
                        <li className='list-disc ml-8 mute'>&lt;aside&gt; : This is often placed as a sidebar in a document.</li>
                        <li className='list-disc ml-8 mute'>&lt;footer&gt; : It defines a footer for a document or a section.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;