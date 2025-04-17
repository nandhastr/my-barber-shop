import React from 'react'
import LatestBlog from '../../features/services/LatestFormBlog';
import BreadCrumb from '../../components/common/BreadCrumb';
import Footer from '../../components/layouts/Footer';

const BlogPage = () => {
  return (
      <>
          <BreadCrumb title={"Blog Page"} />
          <section className="mt-[5%] mb-[5%]">
              <LatestBlog/>
      </section>
      <Footer/>
    </>
  )
}

export default BlogPage;
