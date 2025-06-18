import Link from 'next/link';

// Interface para os itens da sidebar 
export interface SidebarItem {
  title: string;
  slug: string; 
  subItems?: SidebarItem[];
}

// Interface para a sidebar em si  
interface SideBarProps {
  title: string; 
  items: SidebarItem[]; 
  
}

export function SideBar({ title, items }: SideBarProps) {
  return (
    <aside className="fixed top-0 bottom-0 left-0 w-64 md:w-72 bg-custom-blue text-white p-4 pt-28 overflow-y-auto z-40">
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
      </div>

      <nav> 
        <ul className="space-y-1"> 
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`#${item.slug}`}
                className="flex items-center py-2 px-3 rounded-md text-white hover:bg-blue-800 transition-all duration-150 ease-in-out group"
              >
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
              {item.subItems && item.subItems.length > 0 && (
                <ul className="pl-4 mt-1 space-y-0.5 border-l border-blue-300 ml-2.5">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.slug}>
                      <Link
                        href={`#${subItem.slug}`}
                        className="flex items-center py-1.5 px-3 rounded-md text-white hover:bg-blue-700 transition-all duration-150 ease-in-out group"
                      >
                        <span className="text-xs">{subItem.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}