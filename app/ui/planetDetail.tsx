import ExpandableHeading from '@/app/components/expandableHeading';
import { Planet } from '@/app/lib/definitions';
import {
  peopleHeaders,
  filmHeaders,
  planetsHeaders,
} from '../lib/tableHeaders';

export default async function PlanetDetails({
  results,
}: {
  results: Planet | undefined;
}) {
  return (
    <div className='text-md font-light'>
      <h2 className='pt-5 text-lg font-medium leading-loose'>Planet Details</h2>
      <section className='pt-5'>
        {planetsHeaders.map((item) => {
          const keyAccess = item.field as keyof Planet;
          const value = results ? results[keyAccess] : '-';
          return <p key={item.key}>{`${item.label}: ${value}`}</p>;
        })}
      </section>
      <ExpandableHeading
        title='Residents'
        data={results?.residents || []}
        fieldsToDisplay={peopleHeaders}
      />
      <ExpandableHeading
        title='Films'
        data={results?.films || []}
        fieldsToDisplay={filmHeaders}
      />
      <section></section>
    </div>
  );
}
