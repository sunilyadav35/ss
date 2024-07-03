// components/Resume.js

const Resume = () => {
    return (
      <article className="bg-white p-8 rounded-lg shadow-lg">
        <header>
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
        </header>
  
        {/* Education Timeline */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-900 rounded-full p-2 mr-4">
              <ion-icon name="book-outline" class="text-white"></ion-icon>
            </div>
            <h3 className="text-xl font-bold">Education</h3>
          </div>
  
          <ol className="list-decimal pl-4">
            <li className="mb-4">
              <h4 className="text-lg font-semibold mb-2">University school of the arts</h4>
              <span className="text-gray-600">2007 — 2008</span>
              <p className="text-gray-700 mt-2">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias exceptur.
              </p>
            </li>
  
            <li className="mb-4">
              <h4 className="text-lg font-semibold mb-2">New york academy of art</h4>
              <span className="text-gray-600">2006 — 2007</span>
              <p className="text-gray-700 mt-2">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                omnis.
              </p>
            </li>
  
            <li className="mb-4">
              <h4 className="text-lg font-semibold mb-2">High school of art and design</h4>
              <span className="text-gray-600">2002 — 2004</span>
              <p className="text-gray-700 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                magni dolores eos.
              </p>
            </li>
          </ol>
        </section>
  
        {/* Experience Timeline */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-900 rounded-full p-2 mr-4">
              <ion-icon name="book-outline" class="text-white"></ion-icon>
            </div>
            <h3 className="text-xl font-bold">Experience</h3>
          </div>
  
          <ol className="list-decimal pl-4">
            <li className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Creative director</h4>
              <span className="text-gray-600">2015 — Present</span>
              <p className="text-gray-700 mt-2">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                molestias exceptur.
              </p>
            </li>
  
            <li className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Art director</h4>
              <span className="text-gray-600">2013 — 2015</span>
              <p className="text-gray-700 mt-2">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias exceptur.
              </p>
            </li>
  
            <li className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Web designer</h4>
              <span className="text-gray-600">2010 — 2013</span>
              <p className="text-gray-700 mt-2">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias exceptur.
              </p>
            </li>
          </ol>
        </section>
  
        {/* Skills */}
        <section>
          <h3 className="text-xl font-bold mb-4">My skills</h3>
  
          <ul className="grid grid-cols-2 gap-4">
            <li className="bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h5 className="text-lg font-semibold">Web design</h5>
                <data className="text-gray-600" value="80">80%</data>
              </div>
              <div className="bg-gray-300 h-4 rounded-lg overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '80%' }}></div>
              </div>
            </li>
  
            <li className="bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h5 className="text-lg font-semibold">Graphic design</h5>
                <data className="text-gray-600" value="70">70%</data>
              </div>
              <div className="bg-gray-300 h-4 rounded-lg overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '70%' }}></div>
              </div>
            </li>
  
            <li className="bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h5 className="text-lg font-semibold">Branding</h5>
                <data className="text-gray-600" value="90">90%</data>
              </div>
              <div className="bg-gray-300 h-4 rounded-lg overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '90%' }}></div>
              </div>
            </li>
  
            <li className="bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h5 className="text-lg font-semibold">WordPress</h5>
                <data className="text-gray-600" value="50">50%</data>
              </div>
              <div className="bg-gray-300 h-4 rounded-lg overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '50%' }}></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  };
  
  export default Resume;
  