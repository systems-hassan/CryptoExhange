import { Button, Form, Input, Modal } from 'antd';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';

const AddBlogModal = ({ visible, onCancel, onSubmit, viewRecord, editable }) => {
    const handleCancel = () => {
        onCancel();
    };

    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values);
        resetForm();
    };

    return (
        <Modal
            visible={visible}
            onCancel={handleCancel}
            footer={null}>
            <h2>Add New Blog</h2>
            <Formik
                initialValues={ viewRecord ? viewRecord : {
                    author: '',
                    title: '',
                    subtitle: '',
                    body: '',
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.author) {
                        errors.author = 'Name is required';
                    }
                    if (!values.title) {
                        errors.title = 'Title is required';
                    }
                    if (!values.subtitle) {
                        errors.subtitle = 'Subtitle is required';
                    }
                    if (!values.body) {
                        errors.body = 'Body is required';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item label="Author Name" name="author">
                            <Field as={Input} name="author" />
                            <ErrorMessage name="author" component="div" className="error" />
                        </Form.Item>

                        <Form.Item label="Title" name="title">
                            <Field as={Input} name="title" />
                            <ErrorMessage name="title" component="div" className="error" />
                        </Form.Item>

                        <Form.Item label="Subtitle" name="subtitle">
                            <Field as={Input} name="subtitle" />
                            <ErrorMessage name="subtitle" component="div" className="error" />
                        </Form.Item>

                        <Form.Item label="Body" name="body">
                            <Field as={Input.TextArea} name="body" rows={4} />
                            <ErrorMessage name="body" component="div" className="error" />
                        </Form.Item>

                        {!(viewRecord && editable == false) && (
                            <Button type="primary" htmlType="submit">
                                { editable == false ? "Add Blog": "Update Blog"}
                            </Button>
                        )}
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default AddBlogModal;