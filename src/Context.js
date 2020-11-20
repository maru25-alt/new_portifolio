import React , { Component } from 'react';
import Client from './api';
import {getUnique} from './utils/getUnique'


const RoomContext = React.createContext();


class RoomProvider extends Component{

    state = {
        blogs: [],
        categories: [],
        categoricalBlogs: [],
        recentBlogs: [],
        featuredBlogs: [],
        aboutData: [],
        resumeData: [],
        social: []
    }
    getPortifolioData = async() => {
        Client.getEntries({
            content_type : "portifolio", 
              }).then((res) => {
                console.log(res.items[0].fields);
                const resumeData = res.items[0].fields;
                let aboutData = {
                    profile: resumeData.profile,
                    bio: resumeData.aboutMe,
                    name: resumeData.name,
                    description: resumeData.description
                }
                let social = resumeData.social
                this.setState({
                   resumeData,
                   social,
                   aboutData
                })
            })
    }

    getBlogs = async() => {
        Client.getEntries({
            content_type: "blogPost",
            order: "sys.createdAt"
        }).then(res => {
            let blogs = this.formatBlog(res.items);
            let featuredBlogs = blogs.filter(blog => blog.featured === true);
            let  categories  = getUnique(blogs, "category");
            console.log(categories)
            let recentBlogsNum = 3
            let recentBlogs = blogs.slice(0, recentBlogsNum)
            this.setState({
                blogs,
                featuredBlogs,
                recentBlogs,
                categories
            })
        }) 
    }
 
    formatBlog = (items) => {
       let newItems = items.map(item => {
           let id = item.sys.id;
           let date = item.sys.createdAt;
           let post = {...item.fields, id, date}
           return post
       })
       return newItems
    }
    componentDidMount(){
        this.getBlogs();
        this.getPortifolioData();
    }

    render(){
        return(
        <RoomContext.Provider
         value={{
             ...this.state
             
         }}
        >
         {this.props.children}
        </RoomContext.Provider>
     )
    }

}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return (<RoomConsumer>
            {value => <Component {...props} context={value}></Component>}
        </RoomConsumer>

        );
    };
}

export {RoomProvider, RoomConsumer, RoomContext}
