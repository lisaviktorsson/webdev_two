
  

<div class="container">
    <div class="coast">
      <div class="wave-rel-wrap">
        <div class="wave"></div>
      </div>
    </div>
    <div class="coast delay">
      <div class="wave-rel-wrap">
        <div class="wave delay"></div>
      </div>
    </div>
    <div class="text text-w">w</div>
    <div class="text text-a">a</div>
    <div class="text text-v">v</div>
    <div class="text text-e">e</div>
  </div>


  <style>
    :global(*) {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    @import url('https://fonts.googleapis.com/css?family=Muli');
    :root {
      --textDur: 1050ms;
      --waveDur: 2100ms;
    }
  
    :global(body) {
      font-size: 62.5%;
      background-color: #00091B;
      font-family: 'Muli', Helvetica, sans-serif;
    }
  
    .container {
      position: absolute;
      width: 17rem;
      height: 10rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  
    .text {
      color: #fff;
      font-size: 6rem;
      font-weight: 900;
      display: inline-block;
      animation: text var(--textDur) ease-in infinite;
      transform: translatez(0);
    }
  
    .text-w {
      left: 0rem;
      transform: translate3d(0, -4rem, 0);
      animation: text-w var(--textDur) ease-in infinite;
    }
  
    .text-a {
      left: 5.4rem;
      animation-delay: 150ms;
    }
  
    .text-v {
      left: 9.6rem;
      animation-delay: 230ms;
    }
  
    .text-e {
      left: 13rem;
      animation-delay: 310ms;
    }
  
    .coast {
      position: absolute;
      left: 1.3rem;
      bottom: 1.7rem;
      width: 6.2rem;
      height: 2.2rem;
      display: inline-block;
      animation: coast var(--waveDur) linear infinite;
      transform: translateZ(0);
    }
  
    .wave-rel-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      perspective: 3rem;
      perspective-origin: 0%, 50%;
    }
  
    .wave {
      position: absolute;
      width: 6.2rem;
      height: 2.2rem;
      border-radius: 1.1rem;
      background: radial-gradient(ellipse at center, rgba(116, 241, 252, 1) 0%, rgba(50, 230, 255, 1) 73%, rgba(21, 199, 250, 1) 100%);
      display: inline-block;
      animation: wave var(--waveDur) linear infinite;
      will-change: width;
      transform: translateZ(0) scale(0);
    }
  
    .delay {
      animation-delay: var(--waveDur) / 2;
    }
  
    @keyframes text {
      0%, 30% {
        transform: translate3d(0, 0, 0);
      }
      45%, 100% {
        transform: translate3d(0, -4rem, 0);
      }
    }
  
    @keyframes text-w {
      0%, 38%, 100% {
        transform: translate3d(0, -4rem, 0);
      }
      69% {
        transform: translate3d(0, 0, 0);
      }
    }
  
    @keyframes coast {
      0%, 23% {
        transform: translate3d(0, 0, 0);
      }
      50%, 100% {
        transform: translate3d(16rem, 0, 0);
      }
    }
  
    @keyframes wave {
      0% {
        transform: scale(0);
        width: 2.2rem;
      }
      10% {
        transform: scale(1);
      }
      23% {
        width: 2.2rem;
      }
      32% {
        width: 6.1rem;
      }
      42% {
        width: 5rem;
        transform: rotateY(0deg) scale(1, 1);
      }
      51% {
        transform: rotateY(90deg) scale(0.6, 0.2);
      }
      52%, 100% {
        transform: rotateY(90deg) scale(0);
      }
    }
  </style>
  