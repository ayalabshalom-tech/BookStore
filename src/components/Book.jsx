import styles from './book.module.css';
export function Book({title, author,likes, index,isAvailable}){
return<>

<li className={styles.bookCard}>
                   <h1 className={styles.titles}> The name of books: {title}</h1> 
                    <p> The name of author: {author}</p>
                    <p > number of likes: {likes}</p>
                    <p > Item number: {index}</p>
                    {
                        likes > 100 &&
                        <p className={styles.popular}>popular book</p>
                        
                    }

                  {
                    isAvailable == false &&
                        <p className={styles.available}>No available now!!!</p>

                  }
                  
               </li>




</>

}
