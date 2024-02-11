import { DisplayItem } from '../lib/definitions';

export default function ExpandableHeading({
  title,
  data,
  fieldsToDisplay,
}: {
  title: string;
  data: Array<string>;
  fieldsToDisplay: Array<DisplayItem>;
}) {
  if (data.length === 0) return null;

  return (
    <div>
      <details open>
        <summary className='pt-5 text-md leading-6 font-semibold select-none cursor-pointer'>
          {title}
        </summary>
        <div>
          <article className='pt-5 inline-flex items-center gap-5 flex-wrap font-light italic'>
            {data?.map((item, i) => {
              return (
                <div
                  key={i}
                  className='p-5 shadow-lg border-4 border-solid border-yellow-500 rounded-md'>
                  {fieldsToDisplay.map((display: DisplayItem) => {
                    const field = display.field as keyof string;
                    return (
                      <div
                        key={
                          display.key
                        }>{`${display.label}: ${item[field]}`}</div>
                    );
                  })}
                </div>
              );
            })}
          </article>
        </div>
      </details>
    </div>
  );
}
