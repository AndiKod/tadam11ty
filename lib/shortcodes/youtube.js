export default function (options = {}) {

  const { video = 'm1k3Cpke4yU' } = options

  return `<div style="position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; margin-bottom: 1rem;">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;" allowfullscreen></iframe>
    </div>`;
    
}