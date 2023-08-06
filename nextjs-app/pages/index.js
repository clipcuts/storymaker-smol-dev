import React from 'react';
import Layout from '../components/Layout';
import { useGedcom } from '../context/GedcomContext';

export default function Home() {
  const { gedcomData } = useGedcom();

  return (
    <Layout>
      <div>
        {gedcomData.map((data, index) => (
          <div key={index}>
            <h2>{data.name}</h2>
            <p>{data.details}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello');
  const gedcomData = await res.json();

  return {
    props: {
      gedcomData,
    },
  };
}