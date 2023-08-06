import Image from "next/image";

const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async()=>{
    const res = await fetch ('https://dog.ceo/api/breeds/image/random', {
        next :{
            revalidate:5
        }
    });
    return res.json();
}

export default async function ListOfPosts() {
  const [posts, users, dogs] = await Promise.all(
    [getPostData(),
     getUserData(),
     getDogData()]);
  return (
    <>
    <Image src={dogs.message} alt={"dog"} width={300} height={300} />
      <div>
        {posts.map((post: any) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>

      <div>
        {users.map((user: any) => {
            return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </>
  );
}
