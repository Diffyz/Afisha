export const Mapper = {
	mapViewModel: (actors: string[]):string[] =>{       
        return actors.map(x => `<a dangerouslySetInnerHTML={{__html:${x}}} />`);
    }
};


