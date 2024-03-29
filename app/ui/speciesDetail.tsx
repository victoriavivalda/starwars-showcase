import ExpandableHeading from '@/app/components/expandableHeading';
import { Species } from '@/app/lib/definitions';
import {
  filmHeaders,
  peopleHeaders,
  speciesHeaders,
} from '../lib/tableHeaders';

export default async function SpeciesDetails({
  results,
}: {
  results: Species | undefined;
}) {
  return (
    <div className='text-md font-light'>
      <h2 className='pt-5 text-lg font-medium leading-loose'>
        Species Details
      </h2>
      <section className='pt-5'>
        {speciesHeaders.map((item) => {
          const keyAccess = item.field as keyof Species;
          const value = results ? results[keyAccess] : '-';
          return <p key={item.key}>{`${item.label}: ${value}`}</p>;
        })}
      </section>
      <ExpandableHeading
        title='Films'
        data={results?.films || []}
        fieldsToDisplay={filmHeaders}
      />
      <ExpandableHeading
        title='People'
        data={results?.people || []}
        fieldsToDisplay={peopleHeaders}
      />
      <section></section>
    </div>
  );
}
