export const typeDefs = `#graphql
    type Query {
        singleUser: User
        users: [User]
        posts: [Post]
        singlePost (postId: ID!): Post
        myPosts: AllPostPayload
        profile: profilePayload
    }

    type Mutation {
        registration(
            name: String!,
            email: String!,
            password: String!
            image: String!
        ): AuthPayload,
        
        login(
            email: String!
            password: String!
        ): AuthPayload,

        addPost(post: PostInput!): PostPayload,
        updatePost(postId: ID!, post: PostInput!): PostPayload,
        deletePost(postId: ID!): PostPayload,
        publishPost(postId: ID!): PostPayload
    }

    type Post {
        id: ID!
        title: String!
        image: String!
        content: String!
        author: User
        createdAt: String!
        published: String!
        isDeleted: String!
    }

    type User {
        id: ID!  
        name: String!
        email: String!
        createdAt: String!
        profile: Profile
        posts: [Post]
    }

    type Profile {
        id: ID!
        image: String!
        bio: String!
        country: String!
        city: String!
        number: String!      
        createdAt: String!
        user: User!
    }

    type AuthPayload {
        userError: String
        token: String
    }

    type PostPayload {
        userError: String
        result: Post
    }
    type AllPostPayload {
        userError: String
        result: [Post]
    }
    type profilePayload {
        userError: String
        result: Profile 
    }

    input ProfileInfo {
        image: String!
        bio: String!
        country: String!
        city:String!
        number: String
        
    }

    input PostInput {
        title: String
        content: String
        image: String
    }
`;
