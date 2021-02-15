
import React from 'react';
import {Typography, Button, Form, message, Input, Icon} from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone';


const { TextArea } =  input;
const { Title } = Typography;

function VideoUploadPage() {
    return (
        <div style={{ maxWidth: '700px', margin: '2em auto' }}>
            <div>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form onsubmit>
                <div style={{ display:'flex', flexDirection: 'space-between' }}>
                    { /* Drop zone */ }
                    { /* Thumbnail */ }
                    <Dropzone
                    onDrop
                    multiple
                    maxSize>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', 
                        alignItems: 'center', justifyContent: 'center'}} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{ fontSize: '3rem'}} />
                        </div>
                    )}
                    </Dropzone>
                    {/* Thumbnail */}
                    <div>
                        <img src alt />
                    </div>
                </div>
            <br />
            <br />
            <label>Title</label>
            <Input
                onChange
                value
            />
            <br />
            <br />
            <label>Description</label>
            <TextArea
                onChange
                value
            />
            <br />
            <br />

            <select onChange>
                <option key value></option>
            </select>

            <Button type="primary" size="large" onClick>
                Submit
            </Button>
                </Form>
            
        </div>
    )
}

export default VideoUploadPage