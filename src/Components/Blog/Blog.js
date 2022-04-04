import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className="qna_one">
                <h1 className='text-4xl font-semibold text-center pt-20 pb-8'>What is Context API?</h1>
                <img className='w-2/3 mx-auto' src="https://i.ibb.co/df8MxDf/context.png" alt="" />
                <div className="content py-10 ">
                    <blockquote className="p-4 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7">
                        <p >“Context provides a way to pass data through the component tree without having to pass props down manually at every level.”</p>
                    </blockquote>
                    <p className='w-2/3 mx-auto'>For a more in-depth definition, it provides a way for you to make particular data available to all components throughout the component tree no matter how deeply nested that component may be.</p>
                    <p className='py-5 w-2/3 mx-auto'>Let us look at this example:</p>
                    <div className="img-section">
                        <img className='w-1/3 float-left clear-both rounded-lg mr-10' src="https://i.ibb.co/FWrfXGP/app.png" alt="" />
                        <p>In the example above, we specified the application theme using a props in the ParentComponent called theme. We had to pass that props to all components down the component tree to get it where it is needed which is the GrandChild component. The ChildComponent had nothing to do with the theme props but was just used as an intermediary.</p>
                        <p className='my-10'>Now, imagine the GrandChild component was more deeply nested than it was in the top example. We would have to pass the theme props the same way we did here which would be cumbersome. This is the problem that Context solves. With Context, every component in the component tree has access to whatever data we decide to put in our context.</p>
                        <p>With the new Context API, several new functions have been added to the mix creating giving us a rich tool to work with. If you’ve previously attempted to use the old (experimental, do not use) Context API, you may have come across some methods. However, let’s look at some code snippets on how we can use the Context API.</p>
                        <p className='mt-10'>Sometimes we want to change some data in the context, for example changing the theme of the app when a user changes their theme. To do this, we simply connect the data in the context Provider to the state of the parent element and then change this parent’s state using functions in props, a better way is to have the function that will change the context value passed down in the context itself.</p>
                    </div>
                </div>
            </div>
            <div className="qna_two">
                
            </div>
        </div>
    );
};

export default Blog;