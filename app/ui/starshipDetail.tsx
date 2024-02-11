import ExpandableHeading from '@/app/components/expandableHeading';
import { Starship } from '@/app/lib/definitions';
import {
  peopleHeaders,
  filmHeaders,
  starshipHeaders,
} from '../lib/tableHeaders';

export default async function StarshipDetails({
  results,
}: {
  results: Starship | undefined;
}) {
  return (
    <div className='text-md font-light'>
      <h2 className='pt-5 text-lg font-medium leading-loose'>
        Starship Details
      </h2>
      <section className='pt-5'>
        {starshipHeaders.map((item) => (
          <p key={item.key}>{`${item.label}: ${results[item.field]}`}</p>
        ))}
      </section>
      <ExpandableHeading
        title='Pilots'
        data={results?.pilots || []}
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
