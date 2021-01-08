import React, { useState } from 'react';
import { AddLink } from './components/AddLink';
import { SubmitLink } from './components/SubmitLink';
import { Message } from './components/Message';

const App = () => {
    const submitForm = (event: React.FormEvent<HTMLInputElement>) => {
        //   //this.setState({ disabled: e. });
    };

    const [url, setUrl] = useState('');
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <AddLink url={url} onChange={setUrl} />
            <SubmitLink url={url} onClick={submitForm} />
            <Message url={url}></Message>
            {/* <Listing items={items}></Listing> */}
        </div>
    );
};

export default App;