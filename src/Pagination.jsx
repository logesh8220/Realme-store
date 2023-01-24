import React from 'react'

function Pagination({totalPosts,postPerPage,setPage,currentPage}) {
    let pages = []
    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i)
    }
  return (
    <div className='pagination'>
      {pages.map((page,index)=>{
        return (
        <button key={index} onClick={()=> {setPage(page)}} className={page == currentPage ? 'active':''}>
          {page}
          </button>)
    })}
    </div>
  )
}

export default Pagination