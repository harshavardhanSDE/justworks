import App from './App.jsx'; 

export default {
    title: 'App', 
    component: App
}; 

const Template = (args) => <App {...args}></App>; 

export const light = Template.bind({}); 
light.args = {
    label: 'light mode',
}; 

export const dark = Template.bind({}); 
dark.args = {
    label: 'dark mode',
}