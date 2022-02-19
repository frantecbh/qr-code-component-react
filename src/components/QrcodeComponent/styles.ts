import styled from "styled-components";

export const Container = styled.div`

width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction:  column;

      p{
        padding-top: 1rem;
    color: var(--Grayish);
    font-size: 0.8rem;

    text-align: center;

      }

      a{
          
        color: var(--Grayish);
    font-size: 0.8rem;
    

    text-align: center;
      }
`

export const Content = styled.div`
    background: var(--White);
      max-width: 250px;    
      height: 380px;

      border-radius: 8px;
      padding: 1rem;

      img{
      
      width: 100%;
      border-radius: 8px;
  }

  h1{
    color: var(--Dark);
    font-size: 15px;

    padding: 1rem;

    text-align: center;
}

 p{
    color: var(--Grayish);
    font-size: 0.8rem;

    text-align: center;
}

`