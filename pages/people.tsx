import Link from 'next/link';
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { FC, useState, useEffect } from 'react';

// FC+TS+GETSTATICPROPS+RENDER LIST

// Initial problem(IP) : started with this article : https://blog.usman-s.me/getstaticprops-in-nextjs...
   // Works well for just plain React+NextJS, however once TYPESCRIPT+getStaticProps was introduced we ran into major problems

// Solution : https://blog.abhinavrajesh.com/fetching-from-api-in-nextjs-using-getstaticprops-typescript
   // use an interface instead of type, and notice in the getStaticProps we use 'PeopleData[]'
   // instead. Accessing this object like an array is the lynchpin as map only works with arrays.


// IP - we changed to interface instead.
// type PeopleData = {
//     name: string;
//     website: string;
//     email: string;
//   }

interface PeopleData {
    name: string;
    website: string;
    email: string;
  }

  export const getStaticProps = async () => {
    // now an array type PeopleData[]. we can actually work with that.
    const people: PeopleData[] = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();

    return {
      props: {
        people
      },
    };
  };

const People: FC = ({ people }: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log('people', people);

  return (

     <div>
       {/*This is not the way*/}
       {/*Ugh. From IP, So simple but of course we had to make this more complicated with typescript}
       As this produces error : Property 'map' does not exist on type 'PeopleData'.ts(2339)
       */}
      {/*
        {people.map(person => (
            <>
            <h1>{person.name}</h1>
            <h2>Website: {person.website}</h2>
            Email: <code>{person.email}</code>
            </>
        ))}
      */}

        {/*This is the way*/}
        <h2>People ext API using Fetch</h2>
        <hr />
        {people.map((person, i) => (
            <div key={i}>
                <h1>{person.name}</h1>
                <h2>Website: {person.website}</h2>
                <code>Email: {person.email}</code>
            </div>
        ))}


      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>

  );
};

export default People;
