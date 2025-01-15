(() => {

  type sizes = 'S' | 'M' | 'L' | 'XL';

  function createProjectToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: sizes
  ){
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const project = createProjectToJson('Project 1', new Date(), 12, 'M');
  console.log('project', project);
  console.log('project', project.title);
  console.log('project', project.createdAt);
  console.log('project', project.stock);
  console.log('project', project.size);

  const createProjectToJsonV2 =
  (
    title: string,
    createdAt: Date,
    stock: number,
    size?: sizes
  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const projectv2 = createProjectToJsonV2('Project 2', new Date(), 12);
  console.log('project2', projectv2);
  console.log('project2', projectv2.title);
  console.log('project2', projectv2.createdAt);
  console.log('project2', projectv2.stock);
  console.log('project2', projectv2.size);

})();
