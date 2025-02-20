$(`body`).prepend(`
    <ul id="nav">
        <li><a href="../sorter/sorter-sort.html">sorter-줄단위</a></li>
        <li><a href="../sorter/sorter-sort.html">sorter-줄단위</a></li>
    </ul>


    <style>
        *{
            box-sizing: border-box;
        }
        body{
            margin: 0;
        }
        #nav{
            position: absolute;
            top: 0;
            margin: 0;
            width:150px;
        }
        a{
            text-decoration: none;
            color: white;
        }
        a:hover{
            filter: opacity(0.3);
        }

    </style>
`)