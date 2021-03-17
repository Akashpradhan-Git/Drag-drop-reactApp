import React,{ useEffect, useState } from 'react'
import Board, { moveCard } from "@lourenci/react-kanban";
import img1 from '../images/dis1.jpg'
import img2 from '../images/charger.jpg'
import img3 from '../images/case.jpg'

const board = {
    columns: [
      {
        id: 1,
        title: "Parts",
        cards: [
          {
            id: 1,
            title: 'OLED Display',
            description: (
            <img
              src={img1}
              alt="cute cat"
              width="50px"
              height="50px"
            />),
            
          },
          {
            id: 2,
            title: "Charger",
            description: (
              <img
                src={img2}
                alt="cute cat"
                width="50px"
                height="50px"
              />),
          },
          {
            id: 3,
            title: "Case",
            description: (
              <img
                src={img3}
                alt="cute cat"
                width="50px"
                height="50px"
              />),
          }
        ]
      },
      {
        id: 2,
        title: "Assemble",
        cards: []
      },
      
    ]
  };



function ControlledBoard() {
    const [controlledBoard, setBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
    }
    return (
        <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
        
    </Board>
    )
}

export default ControlledBoard
