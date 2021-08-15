function findCenter(edges: number[][]): number {
    let cent:number=0
    for(let i:number=0;i<edges.length-1;i++){
        if(edges[i][0]==edges[i+1][0])
            cent=edges[i][0]
        else if(edges[i][0]==edges[i+1][1])
            cent=edges[i][0]
        else
            cent=edges[i][1]
    }
    return cent
};